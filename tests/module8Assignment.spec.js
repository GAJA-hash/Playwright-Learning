const{test, expect} = require('@playwright/test');

const CheckboxPage = require('../pages/CheckboxPage');
const DropdownPage = require('../pages/DropdownPage');

test('Exercise Pages', async({page}) => {
    const checkboxPage = new CheckboxPage(page);
    const dropdownPage = new DropdownPage(page);
    //Dropdown related actions
    await dropdownPage.navigateToDropdownPage();
    await dropdownPage.selectByIndex(2);
    const value = await dropdownPage.getSelectedValue();
    expect(value).toBe('2');
    await page.screenshot({path: 'screenshots/loginExercise_DD.png'});

    //Checkbox related actions
    await checkboxPage.navigateToCheckBoxPage();
    await checkboxPage.checkFirstBox();
    await checkboxPage.checkSecondBox();
    await checkboxPage.verifyBoxesChecked();
    await page.screenshot({path: 'screenshots/loginExercise_CB.png'});

});