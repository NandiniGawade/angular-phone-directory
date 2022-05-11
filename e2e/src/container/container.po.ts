import { browser, by, element } from "protractor";

export class ContainerPage {
    navigateTo(){
        return browser.get(browser.baseUrl);
    }

    getInputTextbox() {
        return element(by.name('phone'));
    }

    getContainer() {
        return element(by.css('.panel'));
    }
}