import { test, expect } from '@playwright/test';

test('Verify the xpath locators', async ({ page }) => {

    console.log("Launching the application ...");
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await expect(page).toHaveTitle("CURA Healthcare Service");
    console.log("Verifying the title of the page is:", await page.title());

    // use correct XPath syntax and locator format
    console.log("Locating the Make Appointment button and click on it ...");
    let btnMakeAppointment = page.locator('xpath=//a[@id="btn-make-appointment"]');
    await btnMakeAppointment.click();

    let pageLogin = page.locator('xpath=//section[@id="login"]');
    console.log("Verifying the login page is displayed ...");
    await expect(pageLogin).toBeVisible();

    let usernaame = page.locator('xpath=//input[@id="txt-username"]');
    let password = page.locator('xpath=//input[@id="txt-password"]');
    let loginButton = page.locator('xpath=//button[@id="btn-login"]');


    console.log("Filling in the login credentials ...");
    await usernaame.fill("John Doe");
    await password.fill("ThisIsNotAPassword");
    await loginButton.click();


    let appointmentPage = page.locator('xpath=//section[@id="appointment"]');
    console.log("Verifying the appointment page is displayed ...");
    await expect(appointmentPage).toBeVisible();

    let facilityDropdown = page.locator('xpath=//select[@id="combo_facility"]');
    let hospitalReadmissionCheckbox = page.locator('xpath=//input[@id="chk_hospotal_readmission"]');
    let healthcareProgramRadioButton = page.locator('xpath=//input[@name="programs"]');
    let visitDateInput = page.locator('xpath=//input[@id="txt_visit_date"]');
    let commentInput = page.locator('xpath=//textarea[@id="txt_comment"]');
    let bookAppointmentButton = page.locator('xpath=//button[@id="btn-book-appointment"]');

    console.log("count of the radio buttons is:", await healthcareProgramRadioButton.count());

    page.close();
});