import { FormPage } from './form.po';

describe('Form page', () => {
  let page: FormPage;

  beforeEach(() => {
    page = new FormPage();
  });

  it('should have a header "Form"', () => {
    page.navigateTo();
    expect(page.getHeaderText()).toBe('Form');
  });

  it('should be possible to save the form with valid data on input fields', () => {
    page.navigateTo();
    page.selectTeam(0);
    page.setActivity('My activity');
    page.setStartDate(new Date().toString());
    page.setEndDate(new Date().toString());
    page.selectStatus(2);
    page.clickOnSave();
    expect(page.nextPage()).toBe('http://localhost:4200/result');
  });

  it('should be possible to reset the form when I click on reset button', () => {
    page.navigateTo();
    page.selectTeam(0);
    page.setActivity('My activity');
    page.setStartDate(new Date().toString());
    page.setEndDate(new Date().toString());
    page.selectStatus(2);
    page.clickOnCancel();
    expect(page.nextPage()).toBe('http://localhost:4200/form');
  });
});
