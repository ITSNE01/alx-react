import courseReducer from './courseReducer';
import { Map } from 'immutable';
import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from '../actions/courseActionTypes';

describe('courseReducer (Immutable + Normalizr)', () => {
  const sampleData = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ];

  it('returns initial state (empty Map)', () => {
    expect(courseReducer(undefined, {}).toJS()).toEqual({});
  });

  it('handles FETCH_COURSE_SUCCESS by normalizing and merging courses (isSelected:false)', () => {
    const nextState = courseReducer(undefined, {
      type: FETCH_COURSE_SUCCESS,
      data: sampleData,
    });
    expect(nextState.toJS()).toEqual({
      '1': { id: 1, name: 'ES6', credit: 60, isSelected: false },
      '2': { id: 2, name: 'Webpack', credit: 20, isSelected: false },
      '3': { id: 3, name: 'React', credit: 40, isSelected: false },
    });
  });

  it('handles SELECT_COURSE by setting isSelected=true for that id', () => {
    const populated = courseReducer(undefined, {
      type: FETCH_COURSE_SUCCESS,
      data: sampleData,
    });
    const nextState = courseReducer(populated, {
      type: SELECT_COURSE,
      index: 2,
    });
    expect(nextState.toJS()['2'].isSelected).toBe(true);
  });

  it('handles UNSELECT_COURSE by setting isSelected=false for that id', () => {
    let state = courseReducer(undefined, {
      type: FETCH_COURSE_SUCCESS,
      data: sampleData,
    });
    state = state.setIn(['2', 'isSelected'], true);
    const nextState = courseReducer(state, {
      type: UNSELECT_COURSE,
      index: 2,
    });
    expect(nextState.toJS()['2'].isSelected).toBe(false);
  });
});
