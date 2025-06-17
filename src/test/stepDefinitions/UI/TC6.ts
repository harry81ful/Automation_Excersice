import { Then, When } from "@cucumber/cucumber";
import { pageFixture } from "../../../hooks/pageFixture";
import { expect } from "playwright/test";
import { homePageElements } from "../../../../pageObjectModels/homePage";
import { contactFormPageElements } from "../../../../pageObjectModels/contactFormPage";

Then("the home page is visible", async function () {
  await pageFixture.page.waitForLoadState("networkidle");
  const homePage = new homePageElements(pageFixture.page);
  await expect(homePage.homePageHeading).toBeVisible();
});

When("user navigates to contact us page", async function () {
  await pageFixture.page.waitForLoadState("networkidle");
  const navigate = new homePageElements(pageFixture.page);
  await navigate.clickMenuItem("Contact us");
});

Then("users should see Get In Touch on the page", async function () {
  await pageFixture.page.waitForLoadState("networkidle");
  const contactPage = new contactFormPageElements(pageFixture.page);
  await expect(await contactPage.contacUsheading.innerText()).toContain(
    "GET IN TOUCH"
  );
});

When("user enters all the details required", async function () {
  await pageFixture.page.waitForLoadState("networkidle");
  const contactPage = new contactFormPageElements(pageFixture.page);
  await contactPage.fillContactForm();
});

When("clicks on submit button and accepts the popup alerts", async function () {
  await pageFixture.page.waitForLoadState("networkidle");
  const contactPage = new contactFormPageElements(pageFixture.page);
  await contactPage.submitContactForm();
});

Then("user should see {string} message", async function (sucess: string) {
  await pageFixture.page.waitForLoadState("networkidle");
  const contactPage = new contactFormPageElements(pageFixture.page);
  const successMessage = await contactPage.successMessage.innerText();
  await expect(sucess).toContain(successMessage);
});

Then("user navigaes back to home page and verify", async function () {
  await pageFixture.page.waitForLoadState("networkidle");
  const contactPage = new contactFormPageElements(pageFixture.page);
  await contactPage.clickOnHome();

  await pageFixture.page.waitForLoadState("networkidle");
  const homePage = new homePageElements(pageFixture.page);
  await expect(homePage.homePageHeading).toBeVisible();
});
