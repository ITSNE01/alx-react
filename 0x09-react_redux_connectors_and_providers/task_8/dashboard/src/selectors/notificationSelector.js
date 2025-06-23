import { createSelector } from 'reselect';

/**
 * Input selector: returns the notifications Map.
 */
const notificationsMapSelector = (state) =>
  state.notifications.get('notifications');

/**
 * Input selector: returns the current type filter.
 */
const filterSelector = (state) =>
  state.notifications.get('filter');

/**
 * Memoized selector that returns only unread notifications
 * matching the current filter.
 */
export const getUnreadNotificationsByType = createSelector(
  [notificationsMapSelector, filterSelector],
  (notificationsMap, filter) =>
    notificationsMap
      .valueSeq()
      .filter((notif) => !notif.get('isRead'))
      .filter((notif) => {
        if (filter === 'URGENT') {
          return notif.get('type') === 'urgent';
        }
        return true;
      })
);
