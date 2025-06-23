import {
  SELECT_COURSE,
  UNSELECT_COURSE,
  FETCH_COURSE_SUCCESS,
} from './courseActionTypes';

/**
 * Action creator for selecting a course.
 * @param {number} index
 */
export function selectCourse(index) {
  return {
    type: SELECT_COURSE,
    index,
  };
}

/**
 * Action creator for unselecting a course.
 * @param {number} index
 */
export function unSelectCourse(index) {
  return {
    type: UNSELECT_COURSE,
    index,
  };
}

/**
 * Action creator to load courses into the store.
 * @param {Array} data
 */
export function setCourses(data) {
  return {
    type: FETCH_COURSE_SUCCESS,
    data,
  };
}

/**
 * Thunk action creator that fetches /courses.json and dispatches setCourses.
 */
export function fetchCourses() {
  return (dispatch) => {
    return fetch('/courses.json')
      .then((res) => res.json())
      .then((json) => {
        dispatch(setCourses(json));
      });
  };
}
