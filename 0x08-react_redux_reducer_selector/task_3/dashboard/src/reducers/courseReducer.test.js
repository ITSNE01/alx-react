import courseReducer from './courseReducer';
import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from '../actions/courseActionTypes';

describe('courseReducer', () => {
  const sampleCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ];

  it('returns initial state when no action is passed', () => {
    expect(courseReducer(undefined, {})).toEqual([]);
  });

  it('handles FETCH_COURSE_SUCCESS by returning courses with isSelected false', () => {
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: sampleCourses,
    };
    const nextState = courseReducer([], action);
    expect(nextState).toEqual([
      { id: 1, name: 'ES6', credit: 60, isSelected: false },
      { id: 2, name: 'Webpack', credit: 20, isSelected: false },
      { id: 3, name: 'React', credit: 40, isSelected: false },
    ]);
  });

  it('handles SELECT_COURSE by setting the correct course isSelected to true', () => {
    const initial = sampleCourses.map(c => ({ ...c, isSelected: false }));
    const action = { type: SELECT_COURSE, index: 2 };
    const nextState = courseReducer(initial, action);
    expect(nextState).toEqual([
      { id: 1, name: 'ES6', credit: 60, isSelected: false },
      { id: 2, name: 'Webpack', credit: 20, isSelected: true },
      { id: 3, name: 'React', credit: 40, isSelected: false },
    ]);
  });

  it('handles UNSELECT_COURSE by setting the correct course isSelected to false', () => {
    // start with course 2 selected
    const initial = [
      { id: 1, name: 'ES6', credit: 60, isSelected: false },
      { id: 2, name: 'Webpack', credit: 20, isSelected: true },
      { id: 3, name: 'React', credit: 40, isSelected: false },
    ];
    const action = { type: UNSELECT_COURSE, index: 2 };
    const nextState = courseReducer(initial, action);
    expect(nextState).toEqual([
      { id: 1, name: 'ES6', credit: 60, isSelected: false },
      { id: 2, name: 'Webpack', credit: 20, isSelected: false },
      { id: 3, name: 'React', credit: 40, isSelected: false },
    ]);
  });
});
