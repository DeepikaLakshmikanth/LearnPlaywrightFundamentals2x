import { test, expect, FrameLocator } from 'playwright/test';

test(" Basic Web Test. verify iFrames Submissions ", async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/frames/");
    let vehicleFrame: FrameLocator = await page.frameLocator('#frame-one');
    await vehicleFrame.locator('#RESULT_TextField-1').fill('Hyundai');
    await vehicleFrame.locator('#RESULT_TextField-2').fill('Shubham');
    await vehicleFrame.locator('#RESULT_TextField-3').fill('KA-12-ES-3423');
    await vehicleFrame.locator('#RESULT_RadioButton-1').selectOption('Hatchback');
    await vehicleFrame.locator('#RESULT_TextField-4').fill('2024');
    await vehicleFrame.locator('#RESULT_TextArea-1').fill('For Testing purpose only');

    await vehicleFrame.getByText('Submit registration', { exact: true }).click();
    let output = await vehicleFrame.locator('#vehicle-output').innerText();
    console.log(output);
    await page.pause();


});