import { bindActionCreators } from 'redux';
import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from './uiActionTypes';

/**
 * Creates a LOGIN action with a user payload.
 * @param {string} email
 * @param {string} password
 */
export function login(email, password) {
  return {
    type: LOGIN,
    user: { email, password },
  };
}

/** Creates a LOGOUT action. */
export function logout() {
  return { type: LOGOUT };
}

/** Creates an action to display the notification drawer. */
export function displayNotificationDrawer() {
  return { type: DISPLAY_NOTIFICATION_DRAWER };
}

/** Creates an action to hide the notification drawer. */
export function hideNotificationDrawer() {
  return { type: HIDE_NOTIFICATION_DRAWER };
}

/**
 * Binds the above UI action creators to dispatch.
 * Usage:
 *   const {
 *     login,
 *     logout,
 *     displayNotificationDrawer,
 *     hideNotificationDrawer
 *   } = bindUIActionCreators(dispatch);
 */
export function bindUIActionCreators(dispatch) {
  return bindActionCreators(
    {
      login,
      logout,
      displayNotificationDrawer,
      hideNotificationDrawer,
    },
    dispatch
  );
}
