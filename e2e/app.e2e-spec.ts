import { MYFirstDemoPage } from './app.po';

describe('my-first-demo App', function() {
  let page: MYFirstDemoPage;

  beforeEach(() => {
    page = new MYFirstDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
