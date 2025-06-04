import { fromJS } from 'immutable';

/**
 * Accesses a nested value in a plain object by converting it to an Immutable Map
 * and using getIn with the provided path array.
 *
 * @param {Object} object - A plain JavaScript object.
 * @param {Array<string>} pathArray - An array of keys defining the path.
 * @returns {any} The value at the specified path (undefined, primitive, or Map).
 */
export default function accessImmutableObject(object, pathArray) {
  const immutableObj = fromJS(object);
  return immutableObj.getIn(pathArray);
}
