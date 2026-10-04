const {test} = require('@playwright/test');
test('File Download', async ({ page }) => {

await page.goto('https://the-internet.herokuapp.com/download');
const downloadPromise = page.waitForEvent('download');

await page.click('text=some-file.txt');

const download = await downloadPromise;

await download.saveAs('./downloads/file.txt');
});