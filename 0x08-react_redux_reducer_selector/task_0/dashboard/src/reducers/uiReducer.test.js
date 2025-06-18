import uiReducer, { initialState } from './uiReducer';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actions/uiActionTypes';

describe('uiReducer', () => {
  it('returns the initial state when no action is passed', () => {
    expect(uiReducer(undefined, {})).toEqual(initialState);
  });

  it('returns the same state for unrelated action', () => {
    expect(
      uiReducer(initialState, { type: 'SELECT_COURSE', index: 1 })
    ).toEqual(initialState);
  });

  it('handles DISPLAY_NOTIFICATION_DRAWER', () => {
    const nextState = uiReducer(initialState, {
      type: DISPLAY_NOTIFICATION_DRAWER,
    });
    expect(nextState).toEqual({
      ...initialState,
      isNotificationDrawerVisible: true,
    });
  });

  it('handles HIDE_NOTIFICATION_DRAWER', () => {
    const shownState = { ...initialState, isNotificationDrawerVisible: true };
    const nextState = uiReducer(shownState, {
      type: HIDE_NOTIFICATION_DRAWER,
    });
    expect(nextState).toEqual({
      ...initialState,
      isNotificationDrawerVisible: false,
    });
  });

  it('handles LOGIN_SUCCESS', () => {
    const nextState = uiReducer(initialState, {
      type: LOGIN_SUCCESS,
    });
    expect(nextState).toEqual({
      ...initialState,
      isUserLoggedIn: true,
    });
  });

  it('handles LOGIN_FAILURE', () => {
    const nextState = uiReducer(initialState, {
      type: LOGIN_FAILURE,
    });
    expect(nextState).toEqual({
      ...initialState,
      isUserLoggedIn: false,
    });
  });

  it('handles LOGOUT', () => {
    const loggedInState = { ...initialState, isUserLoggedIn: true };
    const nextState = uiReducer(loggedInState, {
      type: LOGOUT,
    });
    expect(nextState).toEqual({
      ...initialState,
      isUserLoggedIn: false,
    });
  });
});
