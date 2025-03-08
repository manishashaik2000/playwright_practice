 import { test, expect } from '@playwright/test';
import { text } from 'stream/consumers';


let todoPage;
 test.beforeEach('basic test', async ({ page }) => {
    await page.goto('https://playwright.dev/');
   // await page.getByRole('link',{name:'GET STARTED'}).click();
   
  });
  test('click on Get started', async ({page}) => {
   await page.getByRole('link',{name:'GET STARTED'}).click();
  });

  test('click on Docs', async ({page}) => {
    await page.getByRole('link',{name:'docs'}).click();
    await page.getByRole('textbox',{name:'username'}).fill('Yassir');
  
    await page.getByRole('button',{name:'signbutton'}).click();
  
    await page.getByRole('checkbox',{name:'state'}).check();

    await page.getByText('GET STARTED').click();

   }
);

test.afterEach('basic test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
 // await page.getByRole('link',{name:'GET STARTED'}).click();
 
});
  