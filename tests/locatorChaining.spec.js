/*
// Without chaining — one big selector (hard to read)
await page.locator('.nav-menu a[href="/settings"]').click();

// With chaining — step by step (easy to read) ✅
await page.locator('.nav-menu')
          .locator('a')
          .getByText('Settings')
          .click();
*/
const { test, expect } = require('@playwright/test');

test('Locator Chaining Demo', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com');

    // ── Example 1: locator → getByText ──────────────────────────────────────
    // Find the <ul> list first, then find the link "Form Authentication" inside it
    await page.locator('#content')
              .getByText('Form Authentication')
              .click();

    // ── Example 2: locator → locator ────────────────────────────────────────
    // Find the form, then find the button inside that form
    await page.goto('https://the-internet.herokuapp.com/login');

    await page.locator('form#login')
              .locator('button[type="submit"]')
              .click();

    // ── Example 3: locator → getByRole ──────────────────────────────────────
    // Find the form, then find the Username textbox inside it by role
    await page.locator('form#login')
              .getByRole('textbox', { name: 'Username' })
              .fill('tomsmith');

    // ── Example 4: locator → filter → click ─────────────────────────────────
    // Find all list items, filter to only the one containing "Checkboxes", click it
    await page.goto('https://the-internet.herokuapp.com');

    await page.locator('#content ul li')
              .filter({ hasText: 'Checkboxes' })
              .click();
});