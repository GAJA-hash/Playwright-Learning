class DropdownPage {
    constructor(page) {
        this.page = page;
        this.dropdown = page.locator('#dropdown');
    }

    async navigateToDropdownPage() {
        await this.page.goto('https://the-internet.herokuapp.com/dropdown');
    }

    async selectByValue(value) {
        await this.dropdown.selectOption(value);
    }

    async selectByLabel(label) {
        await this.dropdown.selectOption({ label: label });
    }

    async selectByIndex(index) {
        await this.dropdown.selectOption({ index: index });
    }

    async getSelectedValue() {
        return await this.dropdown.inputValue();
    }
}

module.exports = DropdownPage;
