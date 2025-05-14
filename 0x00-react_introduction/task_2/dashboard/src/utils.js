// src/utils.js

/**
 * Returns the current year
 */
export function getFullYear() {
  return new Date().getFullYear();
}

/**
 * Returns the correct footer text.
 * @param {boolean} isIndex
 */
export function getFooterCopy(isIndex) {
  return isIndex ? 'ALX' : 'ALX main dashboard';
}

/**
 * Returns the latest notification string (with HTML)
 */
export function getLatestNotification() {
  return '<strong>Urgent requirement</strong> - complete by EOD';
}
