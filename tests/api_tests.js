import { describe, test, expect } from "real-test-js";
import axios from "axios";
import { chromium, devices } from "playwright";

describe("Api tests for SWAPI", () => {
  test("Get Luke Skywalker", async () => {
    const response = await axios.get(`https://swapi.dev/api/people/1/`);
    expect(response.data.name).toBeEqual("Luke Skywalker");
    expect(response.data.height).toBeNotNull();
    expect(response.data.films).toHaveLength(4);
  });
});

describe("UI tests using playwright", () => {
  test("title", { timeout: 20_000 }, async () => {
    const browser = await chromium.launch({ headless: false });
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
