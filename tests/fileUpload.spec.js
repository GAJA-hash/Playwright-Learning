const {test} = require('@playwright/test');
test('File Upload', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/upload');

    await page.setInputFiles(
        '#file-upload',
        'uploads/sample.txt'
    );

    await page.click(
        '#file-submit'
    );

});