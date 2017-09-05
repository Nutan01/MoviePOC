import { MoviePOCPage } from './app.po';

describe('movie-poc App', () => {
  let page: MoviePOCPage;

  beforeEach(() => {
    page = new MoviePOCPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
