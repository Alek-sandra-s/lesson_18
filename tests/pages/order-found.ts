import { BasePage } from './base-page'
import { Page, Locator, expect } from '@playwright/test'
import { Button } from '../atoms/Button'
import { Status } from '../atoms/Status'

export class OrderFoundPage extends BasePage {
  readonly statusOpen: Status
  readonly statusAccepted: Status
  readonly statusInprogress: Status
  readonly statusDelivered: Status
  readonly statusButton: Button
  readonly customerName: Locator
  readonly customerPhone: Locator
  readonly customerComment: Locator

  constructor(page: Page) {
    super(page)
    this.statusOpen = new Status(page, 'OPEN')
    this.statusAccepted = new Status(page, 'ACCEPTED')
    this.statusInprogress = new Status(page, 'INPROGRESS')
    this.statusDelivered = new Status(page, 'DELIVERED')
    this.statusButton = new Button(page, '[data-name="openStatusPopup-button"]')
    this.customerName = page.locator('text = Aleksandra')
    this.customerPhone = page.locator('text = 435365637')
    this.customerComment = page.locator('text = test')
  }
  async checkCustomerName(): Promise<void> {
    await expect(this.customerName).toBeVisible()
    await expect(this.customerName).toHaveText('Aleksandra')
  }
  async checkCustomerPhone(): Promise<void> {
    await expect(this.customerPhone).toBeVisible()
    await expect(this.customerPhone).toHaveText('435365637')
  }
  async checkCustomerComment(): Promise<void> {
    await expect(this.customerComment).toBeVisible()
    await expect(this.customerComment).toHaveText('test')
  }
}
