module.exports = class Page {
    open() {
        return browser.url(`http://localhost:3000`)
    }
}