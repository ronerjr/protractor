import { FormPage } from './form.po';
import { FormData } from './form.data';
import * as using from 'jasmine-data-provider';

describe('Form page', () => {
  const page = new FormPage();
  const data = new FormData();

  beforeEach(() => {
    page.navigateTo();
  });

  it('should have a header "Form"', () => {
    expect(page.getHeaderText()).toBe('Form');
  });

  using(data.valid, (project) => {
    it('should be possible to save the form filled with valid data', () => {
      page.fillForm(project);
      page.clickOnSave();
      expect(page.nextPage()).toBe(page.baseUrl + '/result');
    });
  });

  using(data.valid, (project) => {
    it('should be possible to reset the form when reset button is clicked', () => {
      page.fillForm(project);
      page.clickOnCancel();
      expect(page.nextPage()).toBe(page.baseUrl + '/form');
    });
  });

  using(data.invalid, (project) => {
    it('should not be possible to save the form without valid data', () => {
      page.fillForm(project);
      page.clickOnSave();
      expect(page.nextPage()).toBe(page.baseUrl + '/form');
    });
  });

  using(data.invalid, (project) => {
    it('should validate date fields', () => {
      page.fillForm(project);
      page.clickOnSave();
      expect(page.startDate.getAttribute('class')).toContain('ng-invalid');
    });
  });
});
