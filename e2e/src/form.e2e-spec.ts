import { FormPage } from './form.po';

describe('Form page', () => {
  let page: FormPage;

  beforeEach(() => {
    page = new FormPage();
    page.navigateTo();
  });

  it('should have a header "Form"', () => {
    expect(page.getHeaderText()).toBe('Form');
  });

  it('should be possible to save the form filled with valid data', () => {
    const date = new Date();
    page.fillForm(0, 'My activity', date.toString(), date.toString(), 2);
    page.clickOnSave();
    expect(page.nextPage()).toBe(page.baseUrl + '/result');
  });

  it('should be possible to reset the form when reset button is clicked', () => {
    const date = new Date();
    page.fillForm(0, 'My activity', date.toString(), date.toString(), 2);
    page.clickOnCancel();
    expect(page.nextPage()).toBe(page.baseUrl + '/form');
  });

  it('should not be possible to save the form without valid data', () => {
    page.clickOnSave();
    expect(page.nextPage()).toBe(page.baseUrl + '/form');
  });

  it('should validate date fields', () => {
    page.setStartDate('blabla');
    page.clickOnSave();
    expect(page.startDate.getAttribute('class')).toContain('ng-invalid');
  });
});
