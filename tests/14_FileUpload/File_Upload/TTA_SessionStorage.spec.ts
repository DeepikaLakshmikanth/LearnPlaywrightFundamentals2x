const { chromium } = require("playwright");
// import { test } from '@playwright/test';
// import * as dotenv from 'dotenv';
// import path from 'path';
//dotenv.config();
//const APP_USER = process.env.APP_USER;
//const APP_PASS = process.env.APP_PASS;

async function saveSession() {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://app.thetestingacademy.com/login");
    await page.waitForTimeout(2000);

    await page.locator("#identifier-field").fill("deepika.fplon+2@gmail.com");
    await page.getByRole("button", { name: 'Continue', exact: true }).click();
    //await page.pause();
    await page.locator("#password-field").fill("QualityA@123");
    await page.getByRole("button", { name: 'Continue', exact: true }).click();

    //await page.pause();
    await context.storageState({ path: "./user1-session.json" });
    console.log("Session Saved");
    await browser.close();

}
saveSession();
