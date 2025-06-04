import { List } from 'immutable';

/**
 * Converts a plain JavaScript array into an Immutable List.
 *
 * @param {Array<any>} array - The source array.
 * @returns {List} An Immutable List containing the same elements.
 */
export function getListObject(array) {
  return List(array);
}

/**
 * Appends an element to an existing Immutable List and returns the new List.
 *
 * @param {List} list - An Immutable List.
 * @param {string} element - The string to append.
 * @returns {List} A new Immutable List with the element appended.
 */
export function addElementToList(list, element) {
  return list.push(element);
}
