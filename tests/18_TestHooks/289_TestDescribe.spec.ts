import { test, expect } from '@playwright/test';

test.describe.serial(' Checkout suite-must run in order ', () => {


    test('Open landding', async () => { console.log(" 1 "); });
    test('Search Product', async () => { console.log(" 2 "); });
    test('Add to cart', async () => { console.log(" 3 "); });
    test('go to checkout', async () => { console.log(" 4 "); });

});

// These two run in parallel

test('standalone A ', async () => { console.log('A'); });
test('standalone B ', async () => { console.log('A'); });