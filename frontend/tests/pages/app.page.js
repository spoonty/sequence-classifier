const Page = require('./page');

class AppPage extends Page {
    get confirmBtn() {
        return $('#confirm-button');
    }

    get previousBtn() {
        return $('#previous-button');
    }

    get inputLine() {
        return $('#array-input');
    }

    get warningText() {
        return $('#warning-text');
    }

    get resultText() {
        return $('#result-text');
    }

    get previousText() {
        return $('#previous-text');
    }


    async MakeInput (array) {
        await this.inputLine.setValue(array);
        await this.confirmBtn.click();
    }

    async GetPreviousResult() {
        await this.previousBtn.click();
    }

    open() {
        return super.open('login');
    }
}

module.exports = new AppPage();