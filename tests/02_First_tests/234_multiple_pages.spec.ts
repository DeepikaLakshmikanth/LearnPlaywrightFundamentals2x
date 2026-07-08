import { chromium } from 'playwright'

async function multiTabTest() {
    let browser = await chromium.launch({ headless: false });
    let context = await browser.newContext();

    // Tab 1
    let page1 = await context.newPage();
    await page1.goto("https://www.google.com");
    console.log("Title of the page1 is:", await page1.title());

    // Tab 2

    let page2 = await context.newPage();
    await page2.goto("https://www.bing.com");
    console.log("Title of the page2 is:", await page2.title());
}
multiTabTest();