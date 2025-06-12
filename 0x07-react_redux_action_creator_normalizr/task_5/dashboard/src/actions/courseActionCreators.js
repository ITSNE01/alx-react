import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

/**
 * Action creator for selecting a course.
 * @param {number} index
 * @returns {{ type: string, index: number }}
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
 * @returns {{ type: string, index: number }}
 */
export function unSelectCourse(index) {
  return {
    type: UNSELECT_COURSE,
    index,
  };
}
