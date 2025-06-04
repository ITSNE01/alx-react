import { List, Map } from 'immutable';

/**
 * Concatenates two arrays into a single Immutable List.
 *
 * @param {Array<any>} page1 - First array.
 * @param {Array<any>} page2 - Second array.
 * @returns {List} An Immutable List containing all elements from page1 followed by page2.
 */
export function concatElements(page1, page2) {
  return List(page1).concat(page2);
}

/**
 * Merges two objects into one Map, preferring values from page2 when keys overlap,
 * and returns an Immutable List of the merged values.
 *
 * @param {Object} page1 - First object.
 * @param {Object} page2 - Second object.
 * @returns {List} An Immutable List of the merged object's values.
 */
export function mergeElements(page1, page2) {
  const merged = Map(page1).merge(page2);
  return merged.valueSeq().toList();
}
