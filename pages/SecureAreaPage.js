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
        await expect(this.pageheading).toContainText('Secure Area');
}
}
module.exports = SecureAreaPage;