import { browser, by, element } from 'protractor';
import { build$ } from '../../node_modules/protractor/built/element';

export class FormPage {
  baseUrl = browser.baseUrl;
  headerText = element(by.css('h1'));
  saveButton = element(by.buttonText('Save'));
  cancelButton = element(by.buttonText('Cancel'));
  teamSelect = element(by.name('team'));
  activity = element(by.name('activity'));
  startDate = element(by.name('startDate'));
  endDate = element(by.name('endDate'));
  statusSelect = element(by.name('status'));
  options = element.all(by.css('mat-option'));

  navigateTo() {
    return browser.get('/form');
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

  fillForm(project) {
    this.selectTeam(project.team);
    this.setActivity(project.activity);
    this.setStartDate(project.startDate);
    this.setEndDate(project.endDate);
    this.selectStatus(project.status);
  }

  nextPage() {
    return browser.getCurrentUrl();
  }
}
