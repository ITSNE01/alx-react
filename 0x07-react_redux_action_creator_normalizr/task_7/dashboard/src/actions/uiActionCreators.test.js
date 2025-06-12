import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './uiActionTypes';

import {
  loginRequest,
} from './uiActionCreators';

const middlewares = [thunk];
const mockStore  = configureMockStore(middlewares);

describe('loginRequest async action', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('dispatches LOGIN and LOGIN_SUCCESS on successful fetch', () => {
    // Arrange: mock the API
    fetchMock.getOnce('/login-success.json', {
      status: 200,
      body: { success: true },
      headers: { 'content-type': 'application/json' },
    });

    const store = mockStore({});

    // Act
    return store.dispatch(loginRequest('a@b.com', 'pwd')).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({ type: LOGIN, user: { email: 'a@b.com', password: 'pwd' } });
      expect(actions[1]).toEqual({ type: LOGIN_SUCCESS });
    });
  });

  it('dispatches LOGIN and LOGIN_FAILURE on fetch failure', () => {
    // Arrange: simulate network error
    fetchMock.getOnce('/login-success.json', 500);

    const store = mockStore({});

    // Act
    return store.dispatch(loginRequest('a@b.com', 'pwd')).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({ type: LOGIN, user: { email: 'a@b.com', password: 'pwd' } });
      expect(actions[1]).toEqual({ type: LOGIN_FAILURE });
    });
  });
});
