import { test, expect } from '@playwright/test';
test('task2',async({page})=>{
  await page.goto('https://www.flipkart.com');
  const closeBtn=page.locator('//button[contains(text(),"✕")]');
  if (await closeBtn.isVisible()) {
    await closeBtn.click();
  }
  const searching=page.locator('//input[@name="q"]').first();
  await searching.fill('shoes');
  await searching.press('Enter');
  const womens=page.locator('//a[contains(translate(text(),"WOMEN","women"),"women")]');
  await expect(womens.first()).toBeVisible();
  const count=await womens.count();
  await expect(count).toBeGreaterThan(0);
  const firstText=await womens.first().textContent();
  await expect(firstText?.toLowerCase()).toContain('women');
  await page.screenshot({path:'screenshot/task2.png'});
  await expect(page).toHaveScreenshot('flipkart-women-shoes.png');
});