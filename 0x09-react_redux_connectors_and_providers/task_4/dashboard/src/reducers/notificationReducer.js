import { Map } from 'immutable';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
} from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';

// State is a Map with keys 'filter' and 'notifications' (another Map)
const initialState = Map({
  filter: NotificationTypeFilters.DEFAULT,
  notifications: Map(),
});

/**
 * notificationReducer using Immutable.js and Normalizr
 */
export default function notificationReducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS: {
      const normalized = notificationsNormalizer(action.data);
      return state.set(
        'notifications',
        Map(normalized.entities.notifications)
      );
    }
    case MARK_AS_READ:
      return state.setIn(
        ['notifications', String(action.index), 'isRead'],
        true
      );
    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);
    default:
      return state;
  }
}
