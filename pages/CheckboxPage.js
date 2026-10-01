const { expect } = require('@playwright/test');
class CheckboxPage{
    constructor(page){
    this.page = page;
    this.checkbox = page.locator('input[type="checkbox"]');
    }

    async navigateToCheckBoxPage() {
        await this.page.goto('https://the-internet.herokuapp.com/checkboxes');
    }

    async checkFirstBox(){
        await this.checkbox.nth(0).check();
    }

    async checkSecondBox(){
        await this.checkbox.nth(1).check();

    }

    async verifyBoxesChecked(){
        await expect(this.checkbox.nth(0)).toBeChecked();
        await expect(this.checkbox.nth(1)).toBeChecked();

    }
}

module.exports = CheckboxPage;