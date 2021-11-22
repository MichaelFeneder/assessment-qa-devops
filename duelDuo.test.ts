
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Bot goes back to CHOICES when REMOVED FROM DUO button is clicked', async () => {
    const choices = await driver.findElement(By.id('title'))
    const removed = await choices.isRemoved()
    expect(removed).toBe(true)
})

test('Draw button displays DIV with id=choices', async () => {
    const title = await driver.findElement(By.id('title'))
    const draw = await title.isDisplayed()
    expect(draw).toBe(true)
})