import { test, expect } from '@playwright/test';

test('login with valid credentials', async ({ page }) => {
  await page.goto('https://www.emra.chat/');
  await expect(page.getByRole('heading', { name: 'Revolusi Manajemen WhatsApp' })).toBeVisible();
  await page.goto('https://www.emra.chat/login');
  await expect(page.getByText('Welcome Back')).toBeVisible();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('restinf21@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('testing99');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await expect(page.getByText('Successfully logged in!')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Welcome to Emra! 🎉' })).toBeVisible();
});