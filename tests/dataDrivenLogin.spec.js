// GJ, Oct 3: Created by BOB as per my request to understand pagefactory
const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const { createLoginUser } = require('../utils/testDataFactory');

// Test 1 — Login with default credentials from the factory
test('Login with default user', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // createLoginUser() returns { userName: 'tomsmith', password: 'SuperSecretPassword!' }
    const user = createLoginUser();

    await loginPage.navigateToLoginPage();
    await loginPage.login(user.userName, user.password);

    await expect(page).toHaveURL(/secure/);
});

// Test 2 — Login with a different username (override just the userName)
test('Login with overridden username', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // Override only userName — password stays as 'SuperSecretPassword!'
    const user = createLoginUser({ userName: 'user2' });

    await loginPage.navigateToLoginPage();
    await loginPage.login(user.userName, user.password);

    await expect(page).toHaveURL(/secure/);
});

// Test 3 — Login with fully overridden credentials
test('Login with fully overridden credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // Override both userName and password
    const user = createLoginUser({ userName: 'user3', password: 'NewPassword!' });

    await loginPage.navigateToLoginPage();
    await loginPage.login(user.userName, user.password);

    await expect(page).toHaveURL(/secure/);
});
