// GJ, Oct 3, Created by BOB
function createUser(overrides = {}) {
    return {
        firstName: 'John',
        role: 'Automation engineer',
        city: 'Halifax',
        ...overrides
    };
}

function createAdminUser(overrides = {}) {
    return createUser({
        firstName: 'Admin John',
        role: 'Administrator',
        ...overrides
    });
}

function createTesterUser(overrides = {}) {
    return createUser({
        firstName: 'Tester Jane',
        role: 'QA Tester',
        ...overrides
    });
}

function createLoginUser(overrides = {}) {
    return {
        userName: 'tomsmith',
        password: 'SuperSecretPassword!',
        ...overrides
    };
}

module.exports = { createUser, createAdminUser, createTesterUser, createLoginUser };
