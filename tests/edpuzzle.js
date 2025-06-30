import MTCaptcha from '../lib/MTCaptcha.js';

const mtc = new MTCaptcha({
    siteKey: 'MTPublic-305dpdlj4',
    host: 'https://edpuzzle.com',
    geminiKey: process.env.GEMINI_TEST_KEY
});

const now = Date.now();
const token = await mtc.solve('sign_up_edpuzzle');
console.log('solved in', Date.now() - now, 'ms; token:', token);