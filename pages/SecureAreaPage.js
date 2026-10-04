const { expect } = require('@playwright/test');

class SecureAreaPage{
    constructor(page){
        this.page = page;
        this.successMessage = page.locator('#flash');
        this.pageHeading = page.locator('h2');
    }

    async getSuccessMessage(){
        return await this.successMessage.textContent();
    }

    async getPageHeading(){
        return await this.pageHeading.textContent();
    }

    async verifyPageLoaded() {
        await expect(this.pageHeading).toContainText('Secure Area');
    }

    async verifySuccessfulLogin() {
        await expect(this.pageHeading).toContainText('Secure Area');
        await expect(this.successMessage).toContainText('You logged into a secure area!');
    }
}

module.exports = SecureAreaPage;
