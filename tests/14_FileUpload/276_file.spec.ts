import { test, expect } from 'playwright/test';
import path from 'path';

test(" Locate File Upload ", async ({ page }) => {

    await page.goto('https://www.patternfly.org/components/file-upload/multiple-file-upload');
    // const filepath = path.join(__dirname, 'testdata.txt', 'testdata2.txt');
    // console.log("File path :", filepath);

    await page.locator('div.pf-v6-c-multiple-file-upload input').setInputFiles(
        [{
            name: 'testdata.txt',
            mimeType: 'application/msword',
            buffer: Buffer.from('image from code')
        },
        {
            name: 'testdata2.txt',
            mimeType: 'application/msword',
            buffer: Buffer.from('this is set')
        }
        ]);
    await page.waitForTimeout(25000);

});