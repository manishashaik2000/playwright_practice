import { test, expect } from '@playwright/test';

test('actions', async ({ page })=> {
    await page.goto('https://demoqa.com/'), {timeout:50000};
    await page.getByRole('heading',{name:'Elements'});
    await page.fill('getByText[name="Text Box"]','playwrightuser');

});
  


