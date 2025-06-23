import { bindActionCreators } from 'redux';
import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from './notificationActionTypes';

/**
 * Action creator to mark a notification as read.
 * @param {number} index
 */
export function markAsAread(index) {
  return {
    type:  MARK_AS_READ,
    index,
  };
}

/**
 * Action creator to set the notification filter.
 * @param {string} filter
 */
export function setNotificationFilter(filter) {
  return {
    type:   SET_TYPE_FILTER,
    filter,
  };
}

/**
 * Binds the above notification action creators to dispatch.
 * Usage: const { markAsAread, setNotificationFilter } = bindNotificationActionCreators(dispatch);
 */
export function bindNotificationActionCreators(dispatch) {
  return bindActionCreators(
    { markAsAread, setNotificationFilter },
    dispatch
  );
}
