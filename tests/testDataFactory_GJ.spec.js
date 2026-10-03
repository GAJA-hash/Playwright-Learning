// GJ, Oct 3, Created by BOB
const { test, expect } = require('@playwright/test');
const { createUser, createAdminUser, createTesterUser } = require('../utils/testDataFactory');

// 1. Default user — all defaults
test('Default user data', async ({ page }) => {
    const user = createUser();
    // → { firstName: 'John', role: 'Automation engineer', city: 'Halifax' }
    expect(user.firstName).toBe('John');
    expect(user.role).toBe('Automation engineer');
    expect(user.city).toBe('Halifax');
});

// 2. Default user — override one field
test('Default user with city override', async ({ page }) => {
    const user = createUser({ city: 'London' });
    // → { firstName: 'John', role: 'Automation engineer', city: 'London' }
    expect(user.city).toBe('London');
});

// 3. Admin user — pre-built role
test('Admin user data', async ({ page }) => {
    const admin = createAdminUser();
    // → { firstName: 'Admin John', role: 'Administrator', city: 'Halifax' }
    expect(admin.firstName).toBe('Admin John');
    expect(admin.role).toBe('Administrator');
});

// 4. Admin user — override a field on top
test('Admin user with city override', async ({ page }) => {
    const admin = createAdminUser({ city: 'New York' });
    // → { firstName: 'Admin John', role: 'Administrator', city: 'New York' }
    expect(admin.city).toBe('New York');
});

// 5. Tester user
test('Tester user data', async ({ page }) => {
    const tester = createTesterUser();
    // → { firstName: 'Tester Jane', role: 'QA Tester', city: 'Halifax' }
    expect(tester.firstName).toBe('Tester Jane');
    expect(tester.role).toBe('QA Tester');
});
