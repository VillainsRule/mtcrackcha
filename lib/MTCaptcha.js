import crypto from 'node:crypto';

import { getKeesString, handleFoldChlg } from './cryptoUtil.js';

const md5 = (data) => crypto.createHash('md5').update(data).digest('hex');

class MTCaptcha {
    baseHeaders = {
        'accept': '*/*',
        'accept-encoding': 'gzip, deflate, br, zstd',
        'accept-language': 'en-US,en;q=0.9',
        'content-type': 'application/json',
        'referer': '',
        'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
        'user-agent': 'Mozilla/5.0 (X11; CrOS x86_64 16181.61.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.6998.198 Safari/537.36'
    }

    constructor(config = { siteKey: '', testKey: '', host: '', geminiKey: '', invisible: false }) {
        if (typeof config !== 'object' || Array.isArray(config))
            throw new TypeError('MTCaptcha constructor expects a config object as the first argument');

        this.siteKey = config.siteKey;
        this.testKey = config.testKey || '';
        this.host = config.host;
        this.geminiKey = config.geminiKey;
        this.invisible = config.invisible;

        this.visitorId = `S1${crypto.randomUUID()}`;
    }

    async getChallenge(act) {
        const url = new URL('https://service.mtcaptcha.com/mtcv1/api/getchallenge.json');

        url.searchParams.set('sk', this.siteKey);
        url.searchParams.set('bd', this.host.split('//')[1]);
        url.searchParams.set('rt', Date.now().toString());
        url.searchParams.set('tsh', `TH[${md5(this.siteKey + 'mtcap@mtcaptcha.com')}]`);
        url.searchParams.set('act', act);
        url.searchParams.set('ss', this.visitorId);
        url.searchParams.set('lf', this.invisible ? 't1' : '0');
        url.searchParams.set('tl', '$');
        url.searchParams.set('lg', 'en');
        url.searchParams.set('tp', 's');

        const response = await fetch(url.toString(), { headers: this.baseHeaders });
        const json = await response.json();
        return json.result.challenge;
    }

    async getImage(chlg) {
        const url = new URL('https://service.mtcaptcha.com/mtcv1/api/getimage.json');

        url.searchParams.set('sk', this.siteKey);
        url.searchParams.set('ct', chlg.ct);
        url.searchParams.set('fa', chlg.hasFoldChlg ? handleFoldChlg(chlg.foldChlg.fseed, chlg.foldChlg.fslots, chlg.foldChlg.fdepth) : '$');
        url.searchParams.set('ss', this.visitorId);

        const response = await fetch(url.toString(), { headers: this.baseHeaders });
        return await response.json();
    }

    async askGemini(image64) {
        const request = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'user-agent': 'google-genai-sdk/1.7.0 gl-node/v' + process.versions.node,
                'x-goog-api-client': 'google-genai-sdk/1.7.0 gl-node/v' + process.versions.node,
                'x-goog-api-key': this.geminiKey
            },
            body: JSON.stringify({
                contents: [{
                    parts: [
                        { inlineData: { mimeType: 'image/png', data: image64 } },
                        { text: 'please tell me what the text says. it is only letters. note that color DOES NOT matter, try to read big letters and ignore small ones.' }
                    ],
                    role: 'user'
                }],
                generationConfig: {
                    responseMimeType: 'application/json',
                    responseSchema: {
                        type: 'OBJECT',
                        properties: {
                            solution: { type: 'STRING' }
                        }
                    }
                }
            })
        });

        const response = await request.json();
        const content = response.candidates[0].content;
        return JSON.parse(content.parts[0].text);
    }

    async verify(chlg, solution, act) {
        const url = new URL('https://service.mtcaptcha.com/mtcv1/api/solvechallenge.json');

        url.searchParams.set('ct', chlg.ct);
        url.searchParams.set('sk', this.siteKey);
        url.searchParams.set('st', solution);
        url.searchParams.set('lf', this.invisible ? 't1' : '0');
        url.searchParams.set('bd', this.host.split('//')[1]);
        url.searchParams.set('rt', Date.now().toString());
        url.searchParams.set('tsh', `TH[${md5(this.siteKey + 'mtcap@mtcaptcha.com')}]`);
        url.searchParams.set('fa', chlg.hasFoldChlg ? handleFoldChlg(chlg.foldChlg.fseed, chlg.foldChlg.fslots, chlg.foldChlg.fdepth) : '$');
        url.searchParams.set('qh', this.testKey ? `QH(${md5(this.testKey + chlg.ct).substring(0, 8)})` : '$');
        url.searchParams.set('act', act);
        url.searchParams.set('ss', this.visitorId);
        url.searchParams.set('tl', '$');
        url.searchParams.set('lg', 'en');
        url.searchParams.set('tp', 's');
        url.searchParams.set('kt', getKeesString(chlg.foldChlg.fseed));
        url.searchParams.set('fs', chlg.foldChlg.fseed);

        const request = await fetch(url.toString(), { headers: this.baseHeaders });
        return await request.json();
    }

    async solve(act = '$', _tries = 0) {
        const challenge = await this.getChallenge(act);

        let solution = '$';
        if (!this.invisible) {
            const image = await this.getImage(challenge);
            const base64 = image.result.img.image64;
            // console.log(`data:image/png;base64,${base64}`);
            const response = await this.askGemini(base64);
            solution = response.solution;
        }

        const verifyToken = await this.verify(challenge, solution, act);
        if (verifyToken.result.verifyResult?.isVerified) return { success: true, tries: _tries + 1, token: verifyToken.result.verifyResult.verifiedToken.vt };
        else {
            if (_tries >= 3) return { success: false, tries: _tries + 1, error: 'Verification failed after 3 attempts', rawResponse: verifyToken };
            return await this.solve(act, _tries + 1);
        }
    }
}

export default MTCaptcha;