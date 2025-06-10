import { Given, Then, When } from "@cucumber/cucumber";
import { baseUrl } from "../../../../Utilities/util";
import { expect } from "playwright/test";

When(
  "the user sends a POST request to the all products endpoint",
  async function () {
    this.response = await this.requestContext.post(baseUrl + "productsList");
  }
);

Then(
  "the response body should have a property {string} with value {int}",
  async function (property: string, value: number) {
    const body = await this.response.json();
    expect(body).toHaveProperty(property, value);
  }
);

Then(
  "the response body should have a {string} property with value {string}",
  async function (string, string2) {
    const body = await this.response.json();
    expect(body).toHaveProperty(string, string2);
  }
);
