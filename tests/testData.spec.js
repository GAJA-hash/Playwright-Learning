const { test } = require('@playwright/test');

const users = require('../data/users.json');

test('Sample', async() => {
console.log(users[0].userName);
});
users.forEach(user => {
 
    test(`Check user ${user.userName}`,
    async () => {
        console.log(user.userName);
});
 
});

test.describe('Login Module', () => {        

    test('Valid Login', async () => {
        console.log('Blocks sample 1'
        
        )
    });

    test('Invalid Login', async () => {
        console.log('Blocks sample 2'
        )
    });

});