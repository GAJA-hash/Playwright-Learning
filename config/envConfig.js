const environments = require('../data/environments.json');
const environment = process.env.TEST_ENV || 'qa';  //|| 'qa' is the default fallback — if TEST_ENV is not set, it defaults to 'qa'.
module.exports = environments[environment];

//$env:TEST_ENV="qa" npx playwright test 

//$env:TEST_ENV="uat" npx playwright test (or) npx playwritght test (default run against qa)