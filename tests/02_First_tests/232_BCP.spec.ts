import { chromium, Browser, BrowserContext, Page } from "playwright";

async function run() {
    // Level 1 : Launch a browser instance

    let browser: Browser = await chromium.launch({ headless: false });
    console.log("Browser is launched successfully", browser);

    //Level 2 ; Create a new browser context
    let context1: BrowserContext = await browser.newContext();
    console.log("Browser context is created successfully", context1);

    let context2: BrowserContext = await browser.newContext();
    console.log("Browser context is created successfully", context2);

    //Level 3 : Create a new page
    let page: Page = await context1.newPage();
    console.log("Page is created successfully", page);

    await page.goto("https://app.vwo.com");
    console.log("Title of the page is:", await page.title());

    //cleanup in the reverse order of creation
    await page.close();
    console.log("Page is closed successfully");
    await context1.close(); //close  the context1 
    await context2.close(); //close  the context2 
    await browser.close(); //close the browser
    console.log("Browser is closed successfully");
}

run();