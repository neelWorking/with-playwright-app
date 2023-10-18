import { test } from "@playwright/test";

test.beforeEach(async () => {
  test.setTimeout(100000); // Set a timeout of 30 seconds for each test
});

test("test", async ({ page }) => {
  // Your test code here
  await page.goto("https://mymedisage.com");
  await page.getByRole("link", { name: "Login" }).click();
  await page.getByPlaceholder("Enter your contact number").click();
  await page.getByPlaceholder("Enter your contact number").fill("9518710671");
  await page.getByRole("button", { name: "Receive OTP" }).click();

  await page.getByRole("button", { name: "Verify OTP and continue" }).click();
  await page
    .locator("div")
    .filter({ hasText: /^Community$/ })
    .click();
  await page.getByText("+ Follow").first().click();
  await page.getByText("Following").nth(1);
  await page.getByText("Following").first().click();
  await page
    .locator("div")
    .filter({ hasText: /^Cases$/ })
    .click();

  await page.getByText("Visit Profile").nth(2).click();
  await page.getByText("Activities").first().click();
  await page.getByText("all").first().click();
  await page.getByText("webinar").first().click();
  await page.getByAltText("medisage logo").first().click();
  await page
    .locator("div")
    .filter({ hasText: /^Events$/ })
    .click();
  await page.getByText("details").first().click();
  await page.getByText("Registered").first();
  await page.getByAltText("medisage logo").first().click();
  await page
    .locator("div")
    .filter({ hasText: /^Events$/ })
    .click();
  await page.getByText("past").first().click();
  await page.getByText("...read more").first().click();
  await page.getByAltText("medisage logo").first().click();
  await page
    .locator("div")
    .filter({ hasText: /^Journals$/ })
    .click();
  await page.getByText("journal").nth(4).click();
  await page.getByText("next article").click();
  await page.getByText("Previous article").click();
  await page.getByText("journals").first().click();
  await page
    .locator("div")
    .filter({ hasText: /^Videos$/ })
    .click();
  await page.getByText("...read more").first().click();
  await page.getByText("useful").first().click();
  await page.getByText("Videos").first().click();
  await page
    .locator("div")
    .filter({ hasText: /^Medical Blog$/ })
    .first()
    .click();
  await page.getByText("...read more").first().click();
  await page.getByText("download module");
  await page.getByText("medical blog").first().click();
  await page.getByAltText("profile img").first().click();
  await page.getByText("experts").nth(3).click();
  await page.getByText("Unfollow").first().click();
  await page.getByAltText("medisage logo").first().click();
  await page.getByAltText("profile img").first().click();
  await page.getByText("logout").nth(1).click();
});

// test("test", async ({ page }) => {});
