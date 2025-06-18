import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from '../actions/courseActionTypes';

const initialState = [];

/**
 * courseReducer manages a list of courses, each with an isSelected flag.
 *
 * @param {Array<Object>} state
 * @param {Object} action
 */
export default function courseReducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      // Initialize each course with isSelected: false
      return action.data.map(course => ({
        ...course,
        isSelected: false,
      }));

    case SELECT_COURSE:
      return state.map(course =>
        course.id === action.index
          ? { ...course, isSelected: true }
          : course
      );

    case UNSELECT_COURSE:
      return state.map(course =>
        course.id === action.index
          ? { ...course, isSelected: false }
          : course
      );

    default:
      return state;
  }
}
