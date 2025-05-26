import { Given, When, Then } from "@cucumber/cucumber";
import { pageFixture } from "../../../hooks/pageFixture";
import { homePageElements } from "../../../../pageObjectModels/homePage";
import { expect } from "playwright/test";
import { singupPageElements } from "../../../../pageObjectModels/signUpRegiserPage";
import { tc2email, tc2name } from "../../../../Utilities/util";

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

Given("the user enters a exisiting name and email", async function () {
  const exisitingUserlogsin = new singupPageElements(pageFixture.page);
  await exisitingUserlogsin.nameInputfield.fill(tc2name);
  await exisitingUserlogsin.emailInputfield.fill(tc2email);
});

Then(
  "user should see error message indicating email already exists",
  async function () {
    const exisitingUserlogsin = new singupPageElements(pageFixture.page);
    await expect(exisitingUserlogsin.signUpErrorMessage).toBeVisible();
  }
);
