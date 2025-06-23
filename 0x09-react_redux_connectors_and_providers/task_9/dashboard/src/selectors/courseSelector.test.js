import { Map } from 'immutable';
import { getCourses } from './courseSelector';

describe('courseSelector', () => {
  it('returns a List of courses from state', () => {
    const coursesEntity = {
      1: { id: 1, name: 'ES6', credit: 60 },
      2: { id: 2, name: 'Webpack', credit: 20 },
      3: { id: 3, name: 'React', credit: 40 },
    };
    const state = {
      courses: Map({
        courses: Map(coursesEntity),
      }),
    };
    const result = getCourses(state);
    // Convert to plain JS for comparison
    expect(result.toJS()).toEqual(Object.values(coursesEntity));
  });
});
