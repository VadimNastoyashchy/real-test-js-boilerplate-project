import { describe, test, expect } from "real-test-js";
import { chromium, devices } from "playwright";

describe("UI tests using playwright", () => {
  test("title", { timeout: 20_000 }, async () => {
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext(devices["iPhone 11"]);
    const page = await context.newPage();

    await context.route("**.jpg", (route) => route.abort());
    await page.goto("https://playwright.dev/");

    const title = await page.locator('.getStarted_Sjon').textContent()
    expect(title).toBeEqual("Get started");
   
    await context.close();
    await browser.close();
  });
});
