import { browser, by, element } from 'protractor';
import { build$ } from '../../node_modules/protractor/built/element';

export class FormPage {
  private formUrl = '/form';
  private headerText = element(by.css('h1'));
  private saveButton = element(by.buttonText('Save'));
  private cancelButton = element(by.buttonText('Cancel'));
  private teamSelect = element(by.name('team'));
  private activity = element(by.name('activity'));
  private startDate = element(by.name('startDate'));
  private endDate = element(by.name('endDate'));
  private statusSelect = element(by.name('status'));
  private options = element.all(by.css('mat-option'));

  navigateTo() {
    return browser.get(this.formUrl);
  }

  getHeaderText() {
    return this.headerText.getText();
  }

  selectTeam(index) {
    this.teamSelect.click();
    this.options.get(index).click();
  }

  setActivity(content) {
    this.activity.sendKeys(content);
  }

  setStartDate(content) {
    this.startDate.sendKeys(content);
  }

  setEndDate(content) {
    this.endDate.sendKeys(content);
  }

  selectStatus(index) {
    this.statusSelect.click();
    this.options.get(index).click();
  }

  clickOnSave() {
    this.saveButton.click();
  }

  clickOnCancel() {
    this.cancelButton.click();
  }

  nextPage() {
    return browser.getCurrentUrl();
  }
}
