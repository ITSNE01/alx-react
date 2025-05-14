// task_3/dashboard/src/utils.test.js

import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('Utils module', () => {
  test('getFullYear returns the current year', () => {
    const year = new Date().getFullYear();
    expect(getFullYear()).toBe(year);
  });

  describe('getFooterCopy', () => {
    test('returns "ALX" when isIndex is true', () => {
      expect(getFooterCopy(true)).toBe('ALX');
    });

    test('returns "ALX main dashboard" when isIndex is false', () => {
      expect(getFooterCopy(false)).toBe('ALX main dashboard');
    });
  });

  test('getLatestNotification returns the correct HTML string', () => {
    const expected = '<strong>Urgent requirement</strong> - complete by EOD';
    expect(getLatestNotification()).toBe(expected);
  });
});
