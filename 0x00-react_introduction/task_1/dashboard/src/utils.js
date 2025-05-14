// src/utils.js

/**
 * Returns the current year as a number (e.g. 2025)
 */
export function getFullYear() {
  return new Date().getFullYear();
}

/**
 * Returns the correct footer text.
 * @param {boolean} isIndex — true for the landing page, false otherwise
 */
export function getFooterCopy(isIndex) {
  return isIndex ? 'ALX' : 'ALX main dashboard';
}
