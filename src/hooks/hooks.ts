import {
  BeforeAll,
  Before,
  After,
  AfterAll,
  Status,
  setDefaultTimeout,
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
setDefaultTimeout(60 * 1000);

let browser: Browser;
let context: BrowserContext;
let apiContext: APIRequestContext;
const browserType = "chromium";
let isBrowserLaunched = false;

BeforeAll(async function () {
  if (!isBrowserLaunched) {
    console.log("BeforeAll: Launching browser...");
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
    isBrowserLaunched = true; // Mark the browser as launched
    console.log("BeforeAll: Browser launched successfully.");
  } else {
    console.log("BeforeAll: Browser already launched, skipping...");
  }
});

Before(async function () {
  context = await browser.newContext();
  const page = await context.newPage();
  pageFixture.page = page;
  await pageFixture.page.goto("https://www.automationexercise.com/");
});

After(async function () {
  await pageFixture.page.close();
  await context.close();
});

AfterAll(async function () {
  await browser.close();
});
