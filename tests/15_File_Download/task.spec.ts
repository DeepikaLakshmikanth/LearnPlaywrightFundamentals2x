import { test, expect } from '@playwright/test';
import * as './Login_page.spec'
import path from 'path';

test.describe("File Download", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("https://qajobfit.com/dashboard?tab=builder");
    });

    test(" Verify the Download button is working and save the  file ", async ({ page }) => {
        // Event happened we need to capture , similat to JS Alert
        await page.pause()
        const [staticDownload] = await Promise.all([
            page.waitForEvent("download"),
            page.getByTestId('download-static').click()

        ]);

    });

});