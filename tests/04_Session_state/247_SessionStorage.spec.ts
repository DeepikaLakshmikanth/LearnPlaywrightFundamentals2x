//import { chromium } from "playwright";
const { chromium } = require("playwright");

async function saveSession() {

    let browser = await chromium.launch({ headless: false });
    let context = await browser.newContext();
    let page = await context.newPage();

    await page.goto("https://app.wingify.com/#login");
    await page.waitForTimeout(3000);


    await page.fill("#login-username", "opg73@singleuseemail.site"); //, 
    await page.fill("#login-password", "Wingify@4321");
    await page.waitForTimeout(3000);

    await page.click("#js-login-btn");

    await page.waitForURL(/#\/(dashboard|home)/, { timeout: 10000 });
    await page.waitForTimeout(3000);

    await context.storageState({ path: "./user-session.json" });
    console.log("Session state saved successfully in user-session.json");

    await page.waitForTimeout(3000);
    await browser.close();

}

saveSession().catch((err) => {
    console.error(err);
    process.exit(1);;
});