import { expect, Locator, Page } from '@playwright/test'

export class Status {
    readonly page: Page
    readonly statusLocator: Locator;

    constructor(page: Page, status: string) {
        this.page = page;
        this.statusLocator = page.locator('.status-list__status', {hasText: status});
    }

    async checkVisible(): Promise<void> {
        await expect(this.statusLocator).toBeVisible();
    }
}
