import { test, expect } from '@playwright/test'

test('webshop homepage', async ({ page }) => {
  await expect(page).toHaveTitle(/Danube WebShop/)
  await expect(page).toHaveTitle(/Raccoon/)
  await page.screenshot({ path: 'homepage.jpg' })
})