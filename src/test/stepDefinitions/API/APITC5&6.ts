import { Given, Then, When } from "@cucumber/cucumber";
import { baseUrl } from "../../../../Utilities/util";
import { expect } from "playwright/test";

Given(
  "user searchs for an exisitng {string} with a post call",
  async function (searchItem: string) {
    this.response = await this.requestContext.post(baseUrl + "searchProduct", {
      form: { search_product: searchItem },
    });
  }
);

Then("user should see list of {string}", async function (item: string) {
  const responeBody = await this.response.json();
  const bodylength = responeBody.products.length;
  expect(bodylength).toBeGreaterThan(0);
});

Then("the product list is null", async function () {
  const responeBody = await this.response.json();
  const bodylength = responeBody.products.length;
  expect(bodylength).toEqual(0);
});

Given("user request post call without item", async function () {
  this.response = await this.requestContext.post(baseUrl + "searchProduct");
});

Then(
  "user should recieve a {string} of {int}",
  async function (responseCode: string, responseValue: number) {
    const responseBody = await this.response.json();
    expect(responseBody).toHaveProperty(responseCode, responseValue);
  }
);

Then(
  "a {string} with {string}",
  async function (responseMessage: string, repsoneValue: string) {
    const responseBody = await this.response.json();
    expect(responseBody).toHaveProperty(responseMessage, repsoneValue);
  }
);
