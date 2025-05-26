import { Given, Then } from "@cucumber/cucumber";
import { pageFixture } from "../../../hooks/pageFixture";
import { homePageElements } from "../../../../pageObjectModels/homePage";
import { expect } from "playwright/test";
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
