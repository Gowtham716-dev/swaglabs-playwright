import {test,expect} from '@playwright/test';

// login testcase
test('Login to swag labs page',async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    await page.fill('#user-name','standard_user')
    await page.fill('#password','secret_sauce')
    await page.click('#login-button')
     
    //login succesful
     //const products = await page.locator('.inventory_container')
     //await expect(products).toBeVisible()

     // adding a product to cart
      await page.click('.btn_inventory')
      // checking the cart
      await page.goto('https://www.saucedemo.com/cart.html')
      const itemName = await page.locator('.inventory_item_name')
      await expect(itemName).toBeVisible()
      //click checkout
      await page.click('.checkout_button')
      //payment information
      await page.fill('#first-name','firstname')
      await page.fill('#last-name','lastname')
      await page.fill('#postal-code','3235654')
      await page.click('.cart_button')
      //finish and place order
      await page.goto('https://www.saucedemo.com/checkout-step-two.html')
      await page.click('.cart_button')
      
      const orderSuccess = await page.locator('.complete-header')
      await expect(orderSuccess).toContainText("Thank you for your order!")
      
});

