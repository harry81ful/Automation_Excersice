import {
  Before,
  After,
  AfterAll,
  setDefaultTimeout,
  ITestCaseHookParameter,
} from "@cucumber/cucumber";
import {
  chromium,
  firefox,
  webkit,
  Browser,
  BrowserContext,
  APIRequestContext,
  request,
} from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";
import { baseUrl } from "../../Utilities/util";
import { CustomWorld } from "world/world";

setDefaultTimeout(60 * 1000);

let browser: Browser | undefined;
let context: BrowserContext;
let apiContext: APIRequestContext;
const browserType = "chromium";

Before(async function (this: CustomWorld, scenario: ITestCaseHookParameter) {
  const isApiTest = scenario.pickle.tags.some((tag) => tag.name === "@API");
  this.isApiTest = isApiTest; // Store it for use in After()

  // Create API context always
  await this.initRequestContext();

  // Only initialize browser if it's a UI test
  if (!isApiTest) {
    if (!browser) {
      console.log("Launching browser for UI test...");
      switch (browserType.toLowerCase()) {
        case "firefox":
          browser = await firefox.launch({ headless: false });
          break;
        case "webkit":
          browser = await webkit.launch({ headless: false });
          break;
        default:
          browser = await chromium.launch({ headless: false });
      }
    }

    context = await browser.newContext();
    const page = await context.newPage();
    pageFixture.page = page;
    await page.goto("https://www.automationexercise.com/");
  }
});

After(async function (this: CustomWorld) {
  if (!this.isApiTest) {
    await pageFixture.page.close();
    await context.close();
  }
});

AfterAll(async function () {
  if (browser) {
    await browser.close();
  }
});
