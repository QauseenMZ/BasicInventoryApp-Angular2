import { BasicInventoryAppAngular2Page } from './app.po';

describe('basic-inventory-app-angular2 App', function() {
  let page: BasicInventoryAppAngular2Page;

  beforeEach(() => {
    page = new BasicInventoryAppAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
