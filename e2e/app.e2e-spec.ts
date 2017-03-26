import { Wilsonhobbs.ComPage } from './app.po';

describe('wilsonhobbs.com App', () => {
  let page: Wilsonhobbs.ComPage;

  beforeEach(() => {
    page = new Wilsonhobbs.ComPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
