export interface MTCaptchaConfig {
    siteKey: string;
    testKey?: string;
    host: string;
    geminiKey?: string;
    invisible?: boolean;
}

export interface FoldChlg {
    fseed: string;
    fslots: string;
    fdepth: string;
}

export interface Challenge {
    ct: string;
    hasFoldChlg?: boolean;
    foldChlg?: FoldChlg;
    [key: string]: any;
}

export interface ImageResult {
    result: {
        img: {
            image64: string;
        };
    };
    [key: string]: any;
}

export interface GeminiResponse {
    solution: string;
    [key: string]: any;
}

export interface VerifyResult {
    result: {
        verifyResult?: {
            isVerified: boolean;
            verifiedToken: {
                vt: string;
            };
        };
    };
    [key: string]: any;
}

export interface SolveResult {
    success: boolean;
    tries: number;
    token?: string;
    error?: string;
    rawResponse?: any;
}

declare class MTCaptcha {
    /**
     * Base headers to be used in all MTCaptcha requests.
     * @type {Record<string, string>}
     */
    baseHeaders: Record<string, string>;

    siteKey: string;
    testKey?: string;
    host: string;
    geminiKey?: string;
    invisible?: boolean;
    visitorId: string;

    /**
     * Creates a new MTCaptcha instance.
     * @param {Object} config Configuration object.
     * @param {string} config.siteKey Required. The site key (copy the output of "mtcaptchaConfig.sitekey" in the website's console)
     * @param {string} [config.testKey] Optional. The other site key (copy the output of "mtcaptchaConfig.enableTestMode" in the website's console), if it's null, ignore this param
     * @param {string} config.host Required. The website host (e.g., "https://google.com" or "https://www.mtcaptcha.com")
     * @param {string} [config.geminiKey] Optional. Gemini API key. MUST be specified if not using invisible captcha.
     * @param {boolean} [config.invisible] Optional. Use the invisible/"low friction" captcha mode.
     */
    constructor(config: MTCaptchaConfig);

    /**
     * Fetches information for a fresh captcha challenge.
     * @param act The action identifier.
     */
    getChallenge(act: string): Promise<Challenge>;

    /**
     * Fetches the image for a captcha challenge.
     * @param {Challenge} chlg The captcha challenge object.
     * @returns {Promise<ImageResult>} A promise that resolves to the image result.
     */
    getImage(chlg: Challenge): Promise<ImageResult>;

    /**
     * Asks Gemini to solve a base64 image captcha.
     * @param {string} image64 The captcha challenge object.
     * @returns {Promise<GeminiResponse>} A promise that resolves to the captcha solution.
     */
    askGemini(image64: string): Promise<GeminiResponse>;

    /**
     * Sends the captcha solution to MTCaptcha to obtain a token.
     * @param {Challenge} chlg The captcha challenge object.
     * @param {string} solution The captcha solution.
     * @param {string} act The action identifier.
     * @returns {Promise<GeminiResponse>} A promise that resolves to the captcha solution.
     */
    verify(chlg: Challenge, solution: string, act: string): Promise<VerifyResult>;

    /**
     * Solve a MTCaptcha.
     * @param {string} act The action identifier; instructions to obtain this can be found on our {@link https://npmjs.com/mtcrackcha | NPM package}.
     * @returns {Promise<SolveResult>} A promise that resolves to the captcha solution.
     */
    solve(act?: string, _tries?: number): Promise<SolveResult>;
}

export default MTCaptcha;