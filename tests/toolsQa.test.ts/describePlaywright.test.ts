import { test, expect } from '@playwright/test';
import { TIMEOUT } from 'dns';


test.describe('Playwright UI Automation', () => {
    let page;
    
test.beforeAll(async({ browser }) =>{
  
  const context = await browser.newContext();
  page = await  context.newPage();
  await page.goto('https://demoqa.com/');

});

});