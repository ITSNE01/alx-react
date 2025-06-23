import { Map } from 'immutable';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actions/uiActionTypes';

export const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn:             false,
  user:                       null,
});

/**
 * uiReducer - handles UI visibility and auth flags using Immutable Map.
 *
 * @param {Map} state - Current state (Immutable Map).
 * @param {Object} action - Dispatched action.
 * @returns {Map} New state as an Immutable Map.
 */
export default function uiReducer(state = initialState, action = {}) {
  switch (action.type) {
    case DISPLAY_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', true);
    case HIDE_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', false);
    case LOGIN:
      return state
        .set('user', action.user)
        .set('isUserLoggedIn', true);
    case LOGIN_SUCCESS:
      return state.set('isUserLoggedIn', true);
    case LOGIN_FAILURE:
      return state.set('isUserLoggedIn', false);
    case LOGOUT:
      return state
        .set('user', null)
        .set('isUserLoggedIn', false);
    default:
      return state;
  }
}
