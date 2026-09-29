const {test} = require('@playwright/test');

test('Get page Title', async ({page}) => {
    await page.goto('https://playwright.dev');

    const title = await page.title();

    console.log(title);

}
)