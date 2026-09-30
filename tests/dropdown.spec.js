const{test, expect} = require('@playwright/test');

test('Test Dropdown', async({page}) => {

    await page.goto('https://the-internet.herokuapp.com/dropdown');

// By value  → matches the value="" attribute
await page.selectOption('#dropdown', '1');

// By label  → matches the visible text inside <option>
await page.selectOption('#dropdown', { label: 'Option 2' });

// By index  → matches by position (0 = first option)
await page.selectOption('#dropdown', { index: 1 });

});