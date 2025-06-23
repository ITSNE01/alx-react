import uiReducer, { initialState } from './uiReducer';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actions/uiActionTypes';

describe('uiReducer (Immutable)', () => {
  it('returns the initial state when no action is passed', () => {
    const state = uiReducer(undefined, {});
    expect(state.toJS()).toEqual(initialState.toJS());
  });

  it('returns same state for unrelated action', () => {
    const state = uiReducer(initialState, { type: 'SELECT_COURSE', index: 1 });
    expect(state.toJS()).toEqual(initialState.toJS());
  });

  it('handles DISPLAY_NOTIFICATION_DRAWER', () => {
    const nextState = uiReducer(initialState, {
      type: DISPLAY_NOTIFICATION_DRAWER,
    });
    expect(nextState.toJS()).toEqual({
      ...initialState.toJS(),
      isNotificationDrawerVisible: true,
    });
  });

  it('handles HIDE_NOTIFICATION_DRAWER', () => {
    const shown = initialState.set('isNotificationDrawerVisible', true);
    const nextState = uiReducer(shown, { type: HIDE_NOTIFICATION_DRAWER });
    expect(nextState.toJS()).toEqual({
      ...initialState.toJS(),
      isNotificationDrawerVisible: false,
    });
  });

  it('handles LOGIN_SUCCESS', () => {
    const nextState = uiReducer(initialState, { type: LOGIN_SUCCESS });
    expect(nextState.toJS()).toEqual({
      ...initialState.toJS(),
      isUserLoggedIn: true,
    });
  });

  it('handles LOGIN_FAILURE', () => {
    const nextState = uiReducer(initialState, { type: LOGIN_FAILURE });
    expect(nextState.toJS()).toEqual({
      ...initialState.toJS(),
      isUserLoggedIn: false,
    });
  });

  it('handles LOGOUT', () => {
    const loggedIn = initialState.set('isUserLoggedIn', true);
    const nextState = uiReducer(loggedIn, { type: LOGOUT });
    expect(nextState.toJS()).toEqual({
      ...initialState.toJS(),
      isUserLoggedIn: false,
    });
  });
});
