const { test, expect } = require('@playwright/test');

test('Verify Title', async ({ page }) => {

    await page.goto('https://playwright.dev');

    await expect(page).toHaveTitle(/Playwright/);

    await expect(page).toHaveURL(/playwright/);

    await expect(
    page.getByText('Playwright').first()).toBeVisible();

    await expect(
    page.locator('h1')).toContainText('Playwright');

});

/*
Common Assertions

toBeVisible()

toBeHidden()

toContainText()

toHaveText()

toHaveURL()

toHaveTitle()

toBeChecked()

toBeEnabled()

toBeDisabled()*/