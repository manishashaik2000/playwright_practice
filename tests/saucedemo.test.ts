import { test, expect } from '@playwright/test';

// Define an array of user roles with credentials
const userDetailss = [
  { username: 'standard_user', password: 'secret_sauce' },
  {username: 'locked_out_user', password: 'secret_sauce' },
  {username: 'problem_user', password: 'secret_sauce' },
  {username: 'performance_glitch_user', password: 'secret_sauce' },
  { username: 'error_user', password: 'secret_sauce' },
  { username: 'visual_user', password: 'secret_sauce' },

];


for (const user of userDetailss) {
  test.describe(` Tests1 for ${user.username}`, () => {
    
    test.beforeEach(async ({ page }) => {
      console.log(`Logging in as ${user.username} before each test...`);
      
      await page.goto('https://www.saucedemo.com/');
      await page.fill('[data-test="username"]', user.username);
      await page.fill('[data-test="password"]', user.password);
      await page.click('[data-test="login-button"]');

     // await expect(page).toHaveURL('https://example.com/dashboard');
    });

    test('Verify the text product', async ({ page }) => {
      const textProducts=page.locator('[data-test="title"]');
     await expect(textProducts).toBeVisible();
    });
   
    test('Verify sauce home page url', async ({ page }) => {
      //const sauceurl=page.locator('[data-test="title"]');
     await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    // await expect(page).toHaveTitle("Swag Labs");
    });//Swag Labs
    test('Verify sauce home page title', async ({ page }) => {
      //const sauceurl=page.locator('[data-test="title"]');
     await expect(page).toHaveTitle("Swag Labs");
    });

  });
}
