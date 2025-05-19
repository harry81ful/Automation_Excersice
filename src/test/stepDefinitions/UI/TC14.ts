import { Given, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { homePageElements } from "../../../../pageObjectModels/homePage";
import { pageFixture } from "../../../hooks/pageFixture";
import { productPageElements } from "../../../../pageObjectModels/productPage";

Given("the user is on the home page", async function () {
  await pageFixture.page.waitForLoadState("networkidle");
  const homeElements = new homePageElements(pageFixture.page);
  await expect(homeElements.categoryHeading).toBeVisible();
});

Given("the user adds {int} items to the cart", async function (int) {
  const homeElements = new homePageElements(pageFixture.page);
  await homeElements.listProducts("Blue Top");
  const viewProductPageElement = new productPageElements(pageFixture.page);
  await viewProductPageElement.addToCartButton.click();
  await viewProductPageElement.modalContineButton.click();

  await homeElements.clickMenuItem("Home");
  await expect(homeElements.categoryHeading).toBeVisible();
  await homeElements.listProducts("Summer White Top");
  await viewProductPageElement.addToCartButton.click();
  await viewProductPageElement.modalContineButton.click();
  await homeElements.clickMenuItem("Home");
});
