import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import {
  selectCourse,
  unSelectCourse,
  setCourses,
  fetchCourses,
} from './courseActionCreators';
import {
  SELECT_COURSE,
  UNSELECT_COURSE,
  FETCH_COURSE_SUCCESS,
} from './courseActionTypes';

const middlewares = [thunk];
const mockStore  = configureMockStore(middlewares);

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

  it('setCourses returns the correct action', () => {
    const data = [{ id: '1', name: 'ES6', credit: 60 }];
    expect(setCourses(data)).toEqual({
      type: FETCH_COURSE_SUCCESS,
      data,
    });
  });

  it('fetchCourses dispatches setCourses on successful fetch', () => {
    const data = [
      { id: '1', name: 'ES6', credit: 60 },
      { id: '2', name: 'Webpack', credit: 20 },
    ];
    fetchMock.getOnce('/courses.json', {
      body: data,
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: FETCH_COURSE_SUCCESS, data },
    ];
    const store = mockStore({});
    return store.dispatch(fetchCourses()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
