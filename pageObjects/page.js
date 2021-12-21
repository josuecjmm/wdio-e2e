import WAIT_TIMES from "../constants/WAIT_TIMES";
const {BROWSER_URL} = process.env;
/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class Page {
    /**
     * Click an element on the page
     * @param element: selector that will be interacted
     * **/
    click(element) {
        element.waitForDisplayed(WAIT_TIMES.MEDIUM)
        element.scrollIntoView()
        element.click()
    }

    /**
     * Get the text value on an element
     * @param element: selector that will be interacted
     * **/
    getText(element) {
        element.waitForDisplayed(WAIT_TIMES.MEDIUM)
        return element.getText()
    }

    /**
     * Opens either the initial page or a subPage
     * @param path path of the sub page (e.g. /path/to/page.html)
     */
    static open(path) {
        path
            ? browser.url(`/${path}`)
            : browser.url('/')
    }

    /**
     * Returns a random number that is between the range defined
     * @param min: minimum or initial number
     * @param max: maximum or top number
     * */
    randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    /**
     * Waits for the element and sets the its value
     * @param element: selector that will be interacted
     * @param text: value to be set for the input
     * **/
    sendKeys(element, text) {
        element.waitForDisplayed(WAIT_TIMES.MEDIUM)
        element.addValue(text)
    }

    /**
     * Waits for an element to exist in the DOM
     * @param element: selector that will be interacted
     * **/
    waitForElement(element) {
        element.waitForExist(WAIT_TIMES.MEDIUM)
    }

    clickOnElementWithText(text) {
        browser.$(`//*[text()="${text}"]`).click()
    }
}
