const {test} = require('@playwright/test');

//test('Verify Title', async ({ page }) => {*****}

test.beforeEach(async ({ page }) => {
     console.log('Opening Site');

     await page.goto('https://playwright.dev');

});

test('Test One', async({ page }) => {
    console.log('Executing Test One');
});

test('Test Two', async({ page }) => {
    console.log('Executing Test Two');
});

test.afterEach(async () => {

    console.log('Cleanup');

});

test.beforeAll( async () => {

    console.log('Run Once');

});

test.afterAll(async () => {

    console.log('Suite Finished');

});