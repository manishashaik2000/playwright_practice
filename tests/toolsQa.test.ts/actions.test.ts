import { test, expect } from '@playwright/test';

test('actions', async ({ page })=> {
    await page.goto('https://demoqa.com/'), {timeout:50000};
    await page.getByRole('heading',{name:'Elements'});
    await page.fill('getByText[name="Text Box"]','playwrightuser');
//added a line
await page.locator('#id');
//added a line
});
  


