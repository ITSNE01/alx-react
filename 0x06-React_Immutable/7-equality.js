import { is } from 'immutable';

/**
 * Checks deep equality of two Immutable Maps.
 *
 * @param {Map} map1 - First Immutable Map.
 * @param {Map} map2 - Second Immutable Map.
 * @returns {boolean} True if both maps are deeply equal, false otherwise.
 */
export default function areMapsEqual(map1, map2) {
  return is(map1, map2);
}
