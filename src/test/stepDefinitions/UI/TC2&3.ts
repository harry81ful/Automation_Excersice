import { Given, When, Then } from "@cucumber/cucumber";
import { pageFixture } from "../../../hooks/pageFixture";
import { homePageElements } from "../../../../pageObjectModels/homePage";
import { expect } from "playwright/test";
import { singupPageElements } from "../../../../pageObjectModels/signUpRegiserPage";

Given("user is at home page", async function () {
  await pageFixture.page.waitForLoadState("networkidle");
  const homeElements = new homePageElements(pageFixture.page);
  await expect(homeElements.homePageHeading).toBeVisible();
  await expect(homeElements.categoryHeading).toBeVisible();
});

Given("User clicks on login button", async function () {
  const homeElements = new homePageElements(pageFixture.page);
  await homeElements.clickMenuItem(`Signup / Login`);
});

Then("user is at login page", async function () {
  await pageFixture.page.waitForLoadState();
  const LoginPage = new singupPageElements(pageFixture.page);
  await expect(LoginPage.loginToaccountText).toBeVisible();
});

When("user enters valid email and password", async function () {
  const exisitingUserlogsin = new singupPageElements(pageFixture.page);
  await exisitingUserlogsin.exisitingUserLogin();
});

When("presses on login button", async function () {
  const exisitingUserlogsin = new singupPageElements(pageFixture.page);
  await exisitingUserlogsin.loginButton.waitFor({ state: "visible" });
  await exisitingUserlogsin.loginButton.click();
});

Then(
  "user should be redirected to home page with logged in as message",
  async function () {
    const homeElements = new homePageElements(pageFixture.page);
    await pageFixture.page.waitForLoadState();
    await expect(
      pageFixture.page.locator("a", { hasText: "Logged in as harry81ful" })
    ).toBeVisible();
  }
);

When(
  "user enters wrong {string} and {string}",
  async function (emaiil, password) {
    const exisitingUserlogsin = new singupPageElements(pageFixture.page);
    await exisitingUserlogsin.exisitingUserEmail.waitFor({ state: "visible" });
    await exisitingUserlogsin.exisitingUserEmail.fill(emaiil);
    await exisitingUserlogsin.exisitingUserPassword.fill(password);
  }
);

Then("user should see error message", async function () {
  const errorsInLogin = new singupPageElements(pageFixture.page);
  await pageFixture.page.waitForLoadState();
  await errorsInLogin.loginRules();
});
