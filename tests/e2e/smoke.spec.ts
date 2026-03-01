import { test, expect } from '@playwright/test';

test('basic browser harness works', async ({ page }) => {
  await page.setContent('<main><h1>HR Management</h1></main>');
  await expect(page.getByRole('heading', { name: 'HR Management' })).toBeVisible();
});
