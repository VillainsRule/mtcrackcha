import MTCaptcha from '../lib/MTCaptcha.js';

const mtc = new MTCaptcha({
    siteKey: 'MTPublic-tqNCRE0GS',
    testKey: 'MTPrivQA-tqNCRE0GS-9ULd8fSFtPb8eLlRV2BvHSvkAl3CrDHbMfoGaYnTKWULgenW1p',
    host: 'https://www.mtcaptcha.com',
    invisible: true
});

const now = Date.now();
const token = await mtc.solve();
console.log('solved in', Date.now() - now, 'ms; token:', token);