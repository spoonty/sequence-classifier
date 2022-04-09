const AppPage = require('../pages/app.page');

describe('Sequence classifier application', () => {
    const input = '4 8 15 16 23 42';

    it('Correct input should call result text', async () => {
        await AppPage.open();
        await AppPage.MakeInput(input);
        await expect(AppPage.resultText).toBeExisting();
    });

    it('Correct input should show correct result', async () => {
        await AppPage.open();
        await AppPage.MakeInput(input);
        await expect(AppPage.resultText).toHaveText('STRICTLY INCREASING');
    })

    it('Previous button click should show previous result', async () => {
        await AppPage.open();
        await AppPage.GetPreviousResult();
        await expect(AppPage.previousText).toBeExisting();
    });

    it('Incorrect input should call warning', async () => {
        await AppPage.open();
        await AppPage.MakeInput('4    8 15 sixteen 23, 42');
        await expect(AppPage.warningText).toBeExisting();
    });
});


