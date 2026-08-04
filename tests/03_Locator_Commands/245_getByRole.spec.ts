import { test, expect } from '@playwright/test';

test('Verify get Byrole command', async ({ page }) => {

    await page.goto("https://katalon-demo.cura.heroapp.com/");

    await page.getByRole('link', { name: 'Make Appointment', disabled: false }).click();




});