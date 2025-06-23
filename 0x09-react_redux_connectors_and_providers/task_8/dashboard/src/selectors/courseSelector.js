/**
 * Returns an Immutable List of course entities from the Redux state.
 *
 * @param {Object} state - The Redux root state.
 * @returns {List} Immutable List of course objects.
 */
export function getCourses(state) {
  return state.courses
    .get('courses')
    .valueSeq();
}
