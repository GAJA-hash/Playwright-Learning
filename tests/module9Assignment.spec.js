// 
const { test } = require('@playwright/test');
const users = require('../data/users.json');
const LoginPage = require('../pages/LoginPage');

users.forEach(user =>{
    test(`Login ${user.userName}`, async ({page}) => {
        console.log(user);
        const loginPage = new LoginPage(page);
        await loginPage.navigateToLoginPage();
        await loginPage.login(user.userName, user.role);
    });
});
