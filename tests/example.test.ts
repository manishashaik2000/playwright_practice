  import { test, expect } from '@playwright/test';

test('Verify Playwright Homepage', async ({ page }) => {
  // Navigate to the Playwright website
  await page.goto('https://playwright.dev');

  // Check if the title contains "Playwright"
  await expect(page).toHaveTitle(/Playwright/);

  // Click on the "Get Started" link
  const getStarted=page.getByRole('link', { name: 'Get Starte' });
  //expect(await getStarted.textContent()).toBe('GET STARTED');

expect(getStarted.isDisabled).toBeTruthy();
  // await page.getByRole('link', { name: 'Get Started' }).click();

  // // Verify that the URL contains "/docs/intro"
  // await expect(page).toHaveURL(/.*docs\/intro/);

});
