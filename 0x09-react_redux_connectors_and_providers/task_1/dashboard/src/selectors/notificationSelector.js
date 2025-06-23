import { Map } from 'immutable';

/**
 * Returns the current filter string.
 * @param {Map} state
 */
export const filterTypeSelected = (state) => state.get('filter');

/**
 * Returns the notifications Map (id → notification object).
 * @param {Map} state
 */
export const getNotifications = (state) => state.get('notifications');

/**
 * Returns a Map of only the unread notifications.
 * @param {Map} state
 */
export const getUnreadNotifications = (state) =>
  state.get('notifications').filter((notif) => notif.get('isRead') === false);
