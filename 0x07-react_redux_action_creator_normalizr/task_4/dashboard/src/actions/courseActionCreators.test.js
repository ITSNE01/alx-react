import { selectCourse, unSelectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

describe('courseActionCreators', () => {
  it('selectCourse(1) returns the correct action', () => {
    expect(selectCourse(1)).toEqual({
      type: SELECT_COURSE,
      index: 1,
    });
  });

  it('unSelectCourse(1) returns the correct action', () => {
    expect(unSelectCourse(1)).toEqual({
      type: UNSELECT_COURSE,
      index: 1,
    });
  });
});
