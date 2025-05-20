import { Given, Then } from "@cucumber/cucumber";
import { pageFixture } from "../../../hooks/pageFixture";
import { expect } from "playwright/test";
import { homePageElements } from "../../../../pageObjectModels/homePage";
import { registrationFormPageElements } from "../../../../pageObjectModels/RegistrationFormPage";
import { singupPageElements } from "../../../../pageObjectModels/signUpRegiserPage";

Given("the user is on navigates to home page", async function () {
  await pageFixture.page.waitForLoadState("networkidle");
  const homeElements = new homePageElements(pageFixture.page);
  await expect(homeElements.homePageHeading).toBeVisible();
  await expect(homeElements.categoryHeading).toBeVisible();
});

Given("clicks on Signup Login button", async function () {
  await pageFixture.page.waitForLoadState("networkidle");
  const homeElements = new homePageElements(pageFixture.page);
  await homeElements.clickMenuItem(`Signup / Login`);
});

Then("user should see New User Signup text", async function () {
  await pageFixture.page.waitForLoadState("networkidle");
  const signupElements = new singupPageElements(pageFixture.page);
  await expect(signupElements.newUserText).toBeVisible();
});

Given("the user enters a valid name and email", async function () {
  await pageFixture.page.waitForLoadState("networkidle");
  const signupElements = new singupPageElements(pageFixture.page);
  await signupElements.enterName();
  await signupElements.enterEmail();
});

Given("clicks on Signup button", async function () {
  await pageFixture.page.waitForLoadState("networkidle");
  const signupElements = new singupPageElements(pageFixture.page);
  await signupElements.clickSingupButton();
});

Then("user should see Enter Account Information text", async function () {
  await pageFixture.page.waitForLoadState("networkidle");
  const registerFormElements = new registrationFormPageElements(
    pageFixture.page
  );
  await expect(registerFormElements.accountInfoText).toBeVisible();
});

Then("user fills in the required details with checkboxes", async function () {
  await pageFixture.page.waitForLoadState("networkidle");
  const registerFormElements = new registrationFormPageElements(
    pageFixture.page
  );
  await registerFormElements.selectGender();
  await registerFormElements.enterPassword();
  await registerFormElements.selectNewsLetterCheckbox();
  await registerFormElements.selectReceiveOffersCheckbox();
  await registerFormElements.enterFirstName();
  await registerFormElements.enterLastName();
  await registerFormElements.enterAddress();
  await registerFormElements.enterState();
  await registerFormElements.enterCity();
  await registerFormElements.enterZipCode();
  await registerFormElements.enterMobileNumber();
});

Then("User clicks on create account button", async function () {
  const registerFormElements = new registrationFormPageElements(
    pageFixture.page
  );
  await registerFormElements.clickCreateAccountButton();
});

Then("user should see Account Created text", async function () {
  await pageFixture.page.waitForLoadState("networkidle");
  const registerFormElements = new registrationFormPageElements(
    pageFixture.page
  );
  await expect(registerFormElements.accountCreatedText).toBeVisible();
});

Then("user clicks on Continue button", async function () {
  await pageFixture.page.waitForLoadState("networkidle");
  const registerFormElements = new registrationFormPageElements(
    pageFixture.page
  );
  await registerFormElements.continueButton.click();
});

Then("user should see Logged in as username text", async function () {
  const homeElements = new homePageElements(pageFixture.page);
  await homeElements.clickMenuItem(`Home`);
  await pageFixture.page.waitForLoadState("networkidle");
  await expect(homeElements.loggedInAsText).toBeVisible();
});

Then("user clicks on Delete Account button", async function () {
  const homeElements = new homePageElements(pageFixture.page);
  await homeElements.clickMenuItem(`Delete Account`);
});

Then("user should see Account Deleted text", async function () {
  await pageFixture.page.waitForLoadState("networkidle");
  const homeElements = new homePageElements(pageFixture.page);
  await expect(homeElements.accountDeletedText).toBeVisible();
});
