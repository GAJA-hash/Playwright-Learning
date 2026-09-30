const{test, expect} = require('@playwright/test');

test('Assignment 6 - Login validation', async({page}) => {

    await page.goto('https://the-internet.herokuapp.com/login');
    
    await page.locator('#username').fill('tomsmith');

    await page.locator('#password').fill('SuperSecretPassword!');

    await page.click('.radius');

    await expect(page).toHaveURL(/secure/);

    await expect(page.locator('#flash')).toContainText('You logged into a secure area!');

    await page.screenshot({path: 'screenshots/assignment6-1.png'});


})

test('Assignment 6 - Dropdown', async({page}) => {

    await page.goto('https://the-internet.herokuapp.com/');

    await page.locator('#content')
    .getByText('Dropdown')
    .click();

    await page.selectOption('#dropdown', '2');

    await expect(page.locator('#dropdown')).toHaveValue('2');

    await page.screenshot({path: 'screenshots/assignment6-2.png'});
    });

test('Assignment 6 - Checkbox', async({page}) => {

    await page.goto('https://the-internet.herokuapp.com/');

    await page.locator('#content')
    .getByText('Checkboxes')
    .click();

    await page.locator('input[type="checkbox"]').first().check();

    await expect(page.locator('input[type="checkbox"]').first()).toBeChecked();

    await page.locator('input[type="checkbox"]').nth(1).check();

    await expect(page.locator('input[type="checkbox"]').nth(1)).toBeChecked();

    await page.screenshot({path: 'screenshots/assignment6-3.png'});
    });