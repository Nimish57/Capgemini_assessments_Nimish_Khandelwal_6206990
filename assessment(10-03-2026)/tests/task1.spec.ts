import {test} from '@playwright/test'

test("test2", async({page,browserName})=>{
    await page.goto('https://mail.google.com/');
    await page.locator('//div[@jscontroller="eIu7Db"]').click();
    await page.keyboard.type('nimishkahndelwal284@gmail.com');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.type('Capgemini task');
    await page.keyboard.press('Tab');
    await page.keyboard.insertText('What are you doing brother');
    await page.keyboard.press('Enter');
    await page.keyboard.insertText('Thanking you,');
    await page.keyboard.press('Enter');
    await page.keyboard.insertText('yours truly,');
    await page.keyboard.press('Enter');
    await page.keyboard.insertText('Nimish Khandelwal');
    await page.keyboard.press('Enter');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');
    await page.screenshot({path:`ScreenShot/task1.png`});
})