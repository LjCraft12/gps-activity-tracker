import { GpsActivityTrackerPage } from './app.po';

describe('gps-activity-tracker App', () => {
  let page: GpsActivityTrackerPage;

  beforeEach(() => {
    page = new GpsActivityTrackerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
