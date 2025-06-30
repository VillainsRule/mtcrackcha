<div align='center'>
    <h1>mtcrackcha</h1>
    <h3>beating up a stupid captcha service (mtcaptcha) that pisses me off</h3>
</div>

i'm too tired to write a good readme so heres a tutorial:

1. install `mtcrackcha` using npm or bun or whatever the latest pacakge manager is
2. create a new class

```js
import MTCaptcha from 'mtcrackcha';

const mtc = new MTCaptcha({
    siteKey: 'MTPublic-THISISAKEY',
    testKey: 'MTPrivQA-ThisIsAMuchLongerKeyThatMayNotBeUsedOnSomeWebsites',
    host: 'https://google.com',
    geminiKey: 'AIzaSyGeminiApiKeyGoesHere'
});
```

you can get the sitekey by typing `mtcaptchaConfig.sitekey` into the console of the website and copying the output
you can get the testkey by typing `mtcaptchaConfig.enableTestMode` into the console of the website - if it's `null`, that's normal

the host is the URL beginning (can have subdomain) where you solved the captcha

the gemini key is a gemini api key, wowzers not shocking

there is 1 method: `mtc.solve`

```js
const solution = await mtc.solve('act_goes_here');
if (solution.success) console.log('got mtcaptcha token', solution.token);
else console.log('whelp, time to try it again');
```

you can get the act by:

1. going onto the site where there is a captcha
2. open the browser console (before the cap loads)
3. waiting for the captcha to load
4. go to network and filter by `getchallenge.json`
5. click on it
6. go to `payload` tab
7. looking at the `act` value

chances are the act is `$`, which means there is no act and you can pass nothing as the lib will fill it

if it's an invisible challenge, you don't need a gemini key (but you must make sure to put the testkey) - invisible challenges are solved in <1s

<br><br>
<h5 align='center'>made with :heart: by VillainsRule</h5>