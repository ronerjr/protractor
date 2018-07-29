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

  it('should be possible save a form with valid data on input fields', () => {
    page.navigateTo();
    page.chooseTeam('Team 1');
    page.fillActivity();
    page.fillStartDate();
    page.fillEndDate();
    page.chooseStatus('Green');
    page.clickSave();
    expect(page.resultPage()).toBe('http://localhost:4200/result');
  });
});
