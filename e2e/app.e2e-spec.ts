import { Angular4Lab01UniversalPage } from './app.po';

describe('angular4-lab01-universal App', () => {
  let page: Angular4Lab01UniversalPage;

  beforeEach(() => {
    page = new Angular4Lab01UniversalPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
