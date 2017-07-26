import { AngularInversifyPocPage } from './app.po';

describe('angular-inversify-poc App', () => {
  let page: AngularInversifyPocPage;

  beforeEach(() => {
    page = new AngularInversifyPocPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
