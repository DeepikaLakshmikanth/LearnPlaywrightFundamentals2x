import { test, expect } from '@playwright/test';

test('Verify differnt waitUntil options', async ({ page }) => {

    await page.goto("https://app.com/page1", { waitUntil: 'commit' });
    console.log("commit: Server repsonded with the first byte of the response, but the page may not be fully loaded yet.");

    // Wait for the HTML to be parsed
    await page.goto("https://app.com/page2", { waitUntil: 'domcontentloaded' });
    console.log("domcontentloaded: The page's DOM is fully loaded.");
    //Default: wait for everything to be loaded, including images, css , scripts and subframes
    await page.goto("https://app.com/page3", { waitUntil: 'load' });
    console.log("load: The page and all its resources are fully loaded.");
    // slowest option, wait for the load event to fire and for all network connections to be idle
    await page.goto("https://app.com/page4", { waitUntil: 'networkidle' });
    console.log("networkidle: The page and all its resources are fully loaded, and there are no ongoing network requests.");
});