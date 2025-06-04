import { Map } from 'immutable';

/**
 * Deeply merges two plain objects into an Immutable Map.
 * When nested keys overlap, values are merged rather than overwritten.
 *
 * @param {Object} page1 - First object.
 * @param {Object} page2 - Second object.
 * @returns {Map} An Immutable Map representing the deep merge of page1 and page2.
 */
export function mergeDeeplyElements(page1, page2) {
  return Map(page1).mergeDeep(page2);
}
