import fetch from 'node-fetch'; // or the global fetch if available
import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from './uiActionTypes';

/** Synchronous action creators **/
export const login = (email, password) => ({ type: LOGIN, user: { email, password } });
export const loginSuccess = () => ({ type: LOGIN_SUCCESS });
export const loginFailure = () => ({ type: LOGIN_FAILURE });

export const logout = () => ({ type: LOGOUT });
export const displayNotificationDrawer = () => ({ type: DISPLAY_NOTIFICATION_DRAWER });
export const hideNotificationDrawer    = () => ({ type: HIDE_NOTIFICATION_DRAWER });

/**
 * Async action creator using thunk to perform login flow.
 * Dispatches LOGIN, then tries to fetch /login-success.json.
 * On 200 OK, dispatches LOGIN_SUCCESS; on error, LOGIN_FAILURE.
 */
export function loginRequest(email, password) {
  return (dispatch) => {
    dispatch(login(email, password));

    return fetch('/login-success.json')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(() => {
        dispatch(loginSuccess());
      })
      .catch(() => {
        dispatch(loginFailure());
      });
  };
}
