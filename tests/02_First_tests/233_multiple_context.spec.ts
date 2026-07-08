import { chromium } from 'playwright';

async function multiUserTest() {
    let browser = await chromium.launch({ headless: false });

    // Admin Context
    let adminContext = await browser.newContext();
    let adminPage = await adminContext.newPage();
    await adminPage.goto('https://app.vwo.com/admin');


    //Viewer Context
    let viewerContext = await browser.newContext();
    let viewerPage = await viewerContext.newPage();
    await viewerPage.goto('https://app.vwo.com/viewer');
    console.log("Viewer Page Title:", await viewerPage.title());


    // Cleanup
    adminPage.close();
    viewerPage.close();
    await adminContext.close();
    await viewerContext.close();
    await browser.close();
}

multiUserTest();


