import { browser, by, element } from 'protractor';
import { ContainerPage } from './container.po';

describe('Login tests', () => {
    let page: ContainerPage;

    beforeEach(async () => {
        page = new ContainerPage();
        await page.navigateTo();
    });


    it('Validate phone number masking', async () => {
        page.getInputTextbox().sendKeys('2345567123');
        element(by.name('phone')).getAttribute('value').then((value) => {
            expect(value).toBe('(234) 556-7123');
        });
        await browser.sleep(2000);
    });

    it('Ignore US prefix in phone number', async () => {
        page.getInputTextbox().sendKeys('1');
        page.getInputTextbox().sendKeys('4443331212');
        element(by.name('phone')).getAttribute('value').then((value) => {
            expect(value).toBe('(444) 333-1212');
        });
        await browser.sleep(2000);
    });

    it('Ignore US prefix in phone number', async () => {
        page.getInputTextbox().sendKeys('987654321');
        page.getContainer().click();
        element(by.name('phone')).getAttribute('value').then((value) => {
            expect(value).toBe('(987) 654-321');
        });

        await browser.sleep(3000);
    });
});
