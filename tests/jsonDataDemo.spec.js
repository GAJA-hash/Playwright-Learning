//Read and print all product names from products.json
//Generate tests dynamically.
const { test } = require('@playwright/test');
const products = require('../data/products.json');

products.forEach(product =>{
    test(`Product ${product.name}`, async ({page}) => {
        console.log(product);
    })

})