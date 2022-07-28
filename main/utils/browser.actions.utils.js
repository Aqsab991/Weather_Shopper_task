import waits from "../utils/waits.json"
export async function customClick(elementHandle) {
    await elementHandle.waitForDisplayed({ timeout: waits.veryLargeWait })
    await elementHandle.click()
}

export async function sendKeys(elementHandle, text) {
    await elementHandle.waitForDisplayed({ timeout: waits.veryLargeWait })
    await elementHandle.setValue(text)
}
