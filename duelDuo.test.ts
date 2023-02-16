
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:4000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Should display choices when the Draw button is clicked', async () => {
    const drawButton = await driver.findElement(By.id("draw"));
    await drawButton.click();

    await driver.sleep(5000)

    const choicesDiv = await driver.findElement(By.id("choices"));
    const choicesDivIsDisplayed = await choicesDiv.isDisplayed();

    expect(choicesDivIsDisplayed).toBe(true);
});

test('should display player-duo when an Add to Duo button is clicked', async () => {
    const drawButton = await driver.findElement(By.id("draw"));
    await drawButton.click();

    const addButton = await driver.findElement(By.className("bot-btn"))
    await addButton.click()

    await driver.sleep(5000)

    const playerDuoDiv = await driver.findElement(By.id("player-duo"));
    const playerDuoDivIsDisplayed = await playerDuoDiv.isDisplayed();

    expect(playerDuoDivIsDisplayed).toBe(true)
});