import { ChocoAsAServiceClientPage } from './app.po';

describe('choco-as-aservice-client App', () => {
  let page: ChocoAsAServiceClientPage;

  beforeEach(() => {
    page = new ChocoAsAServiceClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
