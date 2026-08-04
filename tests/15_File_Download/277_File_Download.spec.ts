import { test, expect } from '@playwright/test';
import path from 'path';

test.describe("File Download", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("https://app.thetestingacademy.com/playwright/widgets/upload-download");

    });

    // test(" Verify the Download button is working and save the  file ", async ({ page }) => {
    //     // Event happened we need to capture , similat to JS Alert
    //     const [staticDownload] = await Promise.all([
    //         page.waitForEvent("download"),
    //         page.getByTestId('download-static').click()

    //     ]);
    //     const filepath = path.join('output', staticDownload.suggestedFilename());
    //     await staticDownload.saveAs(filepath);
    // });

    test(" Verify the Download button is working and save the  file ", async ({ page }) => {
        // Event happened we need to capture , similat to JS Alert
        await page.pause()
        const [staticDownload] = await Promise.all([
            page.waitForEvent("download"),
            page.getByTestId('download-static').click()

        ]);

        //await page.pause()
        const filepath = path.join('output', staticDownload.suggestedFilename());
        await staticDownload.saveAs(filepath);
    });


});