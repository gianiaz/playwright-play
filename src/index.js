const {chromium} = require('@playwright/test');
const chromiumOptions = {headless: false, devtools: true};
const contextOptions = {
    'locale': 'it-IT',
    'viewport': {
        width: 1280,
        height: 1024,
    }
};

(async () => {
    const chromiumBrowser = await chromium.launch(chromiumOptions);
    const browser = await chromiumBrowser.newContext(contextOptions);
    const page = await browser.newPage();
    await page.goto('https://www.google.com');
    await page.screenshot({ path: `google.png`});
})();

