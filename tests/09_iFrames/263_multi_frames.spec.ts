import { test, expect, FrameLocator, Locator } from 'playwright/test';

test(" Multi Frames Main , side and Footer ", async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/frames/multi-frames");

    let mainFrame: FrameLocator = await page.frameLocator('[name = "main"]');
    const headertext = await mainFrame.locator('h2').innerText();
    console.log(headertext);

    const allFrames: Locator[] = await page.locator('//frame').all();
    console.log("Total Number of Frames : ", +allFrames.length);

    for (const frames of allFrames) {
        console.log(await frames.getAttribute('name'), " : ", await frames.getAttribute('src'));
    }

    let sideFrame: FrameLocator = page.frameLocator('[name = "side"]');
    await sideFrame.getByTestId('side-link-registration').click();

    //await page.pause();


});