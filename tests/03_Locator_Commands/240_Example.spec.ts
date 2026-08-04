import { test, expect } from '@playwright/test';

test('Locator commands', async ({ page }) => {

    await page.goto("https://app.vwo.com/#login");
});