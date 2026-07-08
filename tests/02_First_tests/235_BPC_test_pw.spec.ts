import { test, expect } from '@playwright/test';

test('BPC test', async ({ browser }) => {
    let adminContext = await browser.newContext();
    let adminpage = await adminContext.newPage();

    let guestContext = await browser.newContext();
    let guestPage = await guestContext.newPage();
    await adminpage.goto("https://app.vwo.com/#login");
    await guestPage.goto("https://app.vwo.com/#dashoboard/home");

    console.log("Admin URL is:", adminpage.url());
    console.log("Guest URL is:", guestPage.url());

    await adminContext.close();
    await guestContext.close();
});