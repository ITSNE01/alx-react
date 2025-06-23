import { fromJS } from 'immutable';
import uiReducer, { initialState } from './uiReducer';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN,
  LOGOUT,
} from '../actions/uiActionTypes';

describe('uiReducer', () => {
  it('returns the initial state when no action', () => {
    expect(uiReducer(undefined, {})).toEqual(initialState);
  });

  it('handles DISPLAY_NOTIFICATION_DRAWER', () => {
    const newState = uiReducer(initialState, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(newState.get('isNotificationDrawerVisible')).toBe(true);
  });

  it('handles HIDE_NOTIFICATION_DRAWER', () => {
    const shown = initialState.set('isNotificationDrawerVisible', true);
    const newState = uiReducer(shown, { type: HIDE_NOTIFICATION_DRAWER });
    expect(newState.get('isNotificationDrawerVisible')).toBe(false);
  });

  it('handles LOGIN action', () => {
    const user = { email: 'a@b.com', password: 'p' };
    const newState = uiReducer(initialState, { type: LOGIN, user });
    expect(newState.get('user')).toEqual(user);
    expect(newState.get('isUserLoggedIn')).toBe(true);
  });

  it('handles LOGOUT action', () => {
    const loggedIn = initialState
      .set('user', { email: 'a@b.com' })
      .set('isUserLoggedIn', true);
    const newState = uiReducer(loggedIn, { type: LOGOUT });
    expect(newState.get('user')).toBeNull();
    expect(newState.get('isUserLoggedIn')).toBe(false);
  });
});
