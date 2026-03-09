import {test,expect} from "@playwright/test"
test("get by methods",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    await expect(page.locator('//div[@class="scenarios_1 "]')).toBeAttached();
    await expect(page.locator('//div[@class="scenarios_1 "]')).toBeVisible();
    await page.getByRole('textbox',{ name:'Name'}).fill("Nimish",{timeout:20000})
    await page.getByRole('textbox',{ name:'Email Id'}).fill("nimishkhandelwal284@gmail.com")
    await page.getByRole('textbox',{ name:'Password'}).fill("123456789")
    await page.getByRole('button',{ name:'Register'}).click()
    await page.screenshot({path:'screenshot/task1.png'});
})