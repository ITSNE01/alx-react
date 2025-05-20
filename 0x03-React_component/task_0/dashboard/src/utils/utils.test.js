import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('Utils functions', () => {
  it('getFullYear returns current year', () => {
    const year = new Date().getFullYear();
    expect(getFullYear()).toBe(year);
  });

  it('getFooterCopy(true) returns "ALX"', () => {
    expect(getFooterCopy(true)).toBe('ALX');
  });

  it('getFooterCopy(false) returns "ALX main dashboard"', () => {
    expect(getFooterCopy(false)).toBe('ALX main dashboard');
  });

  it('getLatestNotification returns the correct HTML string', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
  });
});
