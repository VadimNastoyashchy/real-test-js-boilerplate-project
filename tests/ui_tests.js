import { describe, test, expect, beforeEach, afterEach } from "scripterio";
import { chromium, devices } from "playwright";

describe("UI tests using playwright", () => {
  let browser;
  let context;
  let page;

  beforeEach(async () => {
    browser = await chromium.launch({ headless: true });
    context = await browser.newContext(devices["iPhone 11"]);
    page = await context.newPage();
  });

  afterEach(async () => {
    await context.close();
    await browser.close();
  });

  test("title", { timeout: 20_000 }, async () => {
    await context.route("**.jpg", (route) => route.abort());
    await page.goto("https://playwright.dev/");

    const title = await page.locator(".getStarted_Sjon").textContent();
    expect(title).toBeEqual("Get started");
  });

  test("title2", { timeout: 20_000 }, async () => {
    await context.route("**.jpg", (route) => route.abort());
    await page.goto("https://playwright.dev/");

    const title = await page.locator(".getStarted_Sjon").textContent();
    expect(title).toBeEqual("Get started");
  });
});
