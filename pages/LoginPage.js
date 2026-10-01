class LoginPage{
    constructor(page){
        this.page = page;

        this.usernameTextbox =
        page.locator('#username');

        this.passwordTextbox = 
        page.locator('#password');

        this.loginButton = 
        page.locator('button[type="submit"]');
    }
    async navigateToLoginPage() {
 
        await this.page.goto(
            'https://the-internet.herokuapp.com/login'
        );
 
}
    async enterUsername(username){
        await this.usernameTextbox.fill(
            username
        );
    }
    async enterPassword(password){
        await this.passwordTextbox.fill(
            password   
        )
    }
    async clickLogin(){
        await this.loginButton.click();
    }
    async login(username, password){
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLogin();
    }
}
    module.exports = LoginPage;
