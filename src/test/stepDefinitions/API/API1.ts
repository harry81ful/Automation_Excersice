import { Given, Then, When } from "@cucumber/cucumber";
import { baseUrl } from "../../../../Utilities/util";
import { expect } from "playwright/test";

Given("the user sends a GET request", async function () {
  this.response = await this.requestContext.get(baseUrl + "productsList");
});

Then("the response status code should be {int}", async function (statusCode) {
  await expect(this.response.status()).toBe(statusCode);
});

Then("the response should contain a list of products", async function () {
  const body = await this.response.json();
  expect(Array.isArray(body.products)).toBe(true);
  expect(body.products.length).toBeGreaterThan(0);
});

Then(
  "the response should contain product details such as name, price, and description",
  async function () {
    const body = await this.response.json();
    const product = body.products[0];
    expect(product).toHaveProperty("id");
    expect(product).toHaveProperty("name");
    expect(product).toHaveProperty("price");
  }
);
