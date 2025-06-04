import { Map } from 'immutable';

/**
 * Converts a plain JavaScript object into an Immutable Map.
 *
 * @param {Object} obj - The source object.
 * @returns {Map} An Immutable Map representation of the object.
 */
export default function getImmutableObject(obj) {
  return Map(obj);
}
