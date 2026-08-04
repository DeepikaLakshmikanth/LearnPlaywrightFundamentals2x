import { test, expect, chromium } from "@playwright/test";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

//async function saveSession() {
test("Save session", async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://app.thetestingacademy.com/login");
    await page.waitForTimeout(2000);
    //await expect(page.locator("//h1")).toHaveText("Sign in to TheTestingAcademy");

    await page.locator("#identifier-field").fill(process.env.EMAIL!);
    //await page.pause();
    await page.getByRole('button', { name: 'Continue', exact: true }).click();
    await page.locator("#password-field").fill(process.env.PASSWORD!);
    await page.getByRole('button', { name: 'Continue', exact: true }).click();

    //await page.pause();
    await context.storageState({ path: "./user1-session.json" });
    console.log("Session Saved");

    await browser.close();

});

//saveSession();