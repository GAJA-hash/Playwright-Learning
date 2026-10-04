const { test } =
require('@playwright/test');

const LoginPage =
require('../pages/LoginPage');

const SecureAreaPage =
require('../pages/SecureAreaPage');

const DropdownPage =
require('../pages/DropdownPage');

test('Login @smoke', async ({ page }) => {

        const loginPage =
            new LoginPage(page);

        const secureAreaPage =
            new SecureAreaPage(page);

        await loginPage.navigateToLoginPage();

        await loginPage.login(
            'tomsmith',
            'SuperSecretPassword!'
        );

        await secureAreaPage
            .verifySuccessfulLogin();

    }
);

test('Dropdown @regression', async ({ page }) => {

        const dropdownPage =
            new DropdownPage(page);

        await dropdownPage.navigateToDropdownPage();

        await dropdownPage
            .selectOption2();

        await dropdownPage
            .verifyOption2Selected();

    }
);