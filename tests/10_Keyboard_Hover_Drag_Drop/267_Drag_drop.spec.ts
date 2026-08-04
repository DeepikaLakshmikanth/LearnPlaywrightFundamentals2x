import { test, expect } from 'playwright/test';

test(" Drag and Drop ", async ({ page }) => {
    page.goto("https://the-internet.herokuapp.com/drag_and_drop");
    const colA = page.locator("#column-a");
    const colB = page.locator("#column-b");

    await colA.dragTo(colB);
    await page.pause();



});