import { Map } from 'immutable';
import { coursesNormalizer } from '../schema/courses';
import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from '../actions/courseActionTypes';

// State is a Map of courseId → courseObject
const initialState = Map();

/**
 * courseReducer using Immutable.js and Normalizr
 */
export default function courseReducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS: {
      const normalized = coursesNormalizer(action.data);
      // normalized.entities.courses is plain { id: {..., isSelected:false}, ... }
      return state.mergeDeep(normalized.entities.courses);
    }
    case SELECT_COURSE:
      return state.setIn(
        [String(action.index), 'isSelected'],
        true
      );
    case UNSELECT_COURSE:
      return state.setIn(
        [String(action.index), 'isSelected'],
        false
      );
    default:
      return state;
  }
}
