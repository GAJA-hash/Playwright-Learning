const{test, expect} = require('@playwright/test');

test('Exercise', async({page}) => {
    await page.goto('https://playwright.dev');  //Open webpage
    console.log('The page title is -> ', await page.title()); //Print title
    console.log('The current URL is -> ', await page.url());// print current url

    await expect(page).toHaveTitle(/Playwright/);  //Verify title contains Playwright

    await page.screenshot({
        path: 'screenshots/assignment.png'
    });

    await page.goBack();   //Go back

    await page.goForward();  //Go forward

    await expect(page).toHaveURL(/playwright.dev/); //verify URL contains playwright.dev
});