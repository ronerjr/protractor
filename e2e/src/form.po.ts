import { browser, by, element } from 'protractor';
import { build$ } from '../../node_modules/protractor/built/element';

export class FormPage {
  navigateTo() {
    return browser.get('/form');
  }

  getHeaderText() {
    return element(by.css('h1')).getText();
  }

  chooseTeam(team) {
    element(by.name('team')).click();
    element(by.cssContainingText('mat-option', team)).click();
  }

  fillActivity() {
    element(by.name('activity')).sendKeys('My activity');
  }

  fillStartDate() {
    element(by.name('startDate')).sendKeys(new Date().toString());
  }

  fillEndDate() {
    element(by.name('endDate')).sendKeys(new Date().toString());
  }

  chooseStatus(status) {
    element(by.name('status')).click();
    element(by.cssContainingText('mat-option', status)).click();
  }

  clickSave() {
    element(by.buttonText('Save')).click();
  }

  resultPage() {
    return browser.getCurrentUrl();
  }
}
