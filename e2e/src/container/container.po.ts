import { browser, by, element, ElementFinder } from 'protractor';

export class ContainerPage {
    navigateTo(): any {
        return browser.get(browser.baseUrl);
    }

    getInputTextbox(): ElementFinder {
        return element(by.name('phone'));
    }

    getContainer(): ElementFinder {
        return element(by.css('.panel'));
    }
}
