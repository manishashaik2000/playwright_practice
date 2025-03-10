import { test, expect } from '@playwright/test';
import { TIMEOUT } from 'dns';

test('actions', async ({ page })=> {
    await page.goto('https://demoqa.com/'), {timeout:50000};
    await page.click('text= Elements');
    await expect(page).toHaveURL('https://demoqa.com/elements');
    await page.getByText('Check Box').click();
});
  


