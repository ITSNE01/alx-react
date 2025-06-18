import { bindActionCreators } from 'redux';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

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
 * Binds the above action creators to dispatch.
 * Usage: const { selectCourse, unSelectCourse } = bindCourseActionCreators(dispatch);
 */
export function bindCourseActionCreators(dispatch) {
  return bindActionCreators(
    { selectCourse, unSelectCourse },
    dispatch
  );
}
