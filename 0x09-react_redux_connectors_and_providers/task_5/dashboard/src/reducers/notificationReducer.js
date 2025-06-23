import { Map } from 'immutable';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
  SET_LOADING_STATE,
} from '../actions/notificationActionTypes';

export const initialState = Map({
  filter:        'DEFAULT',
  notifications: Map(),
  loading:       false,
});

/**
 * notificationReducer - manages notifications list, filter, and loading flag.
 *
 * @param {Map}    state  - Current state as Immutable Map.
 * @param {Object} action - Dispatched action.
 * @returns {Map} New state as Immutable Map.
 */
export default function notificationReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_LOADING_STATE:
      return state.set('loading', action.isLoading);

    case FETCH_NOTIFICATIONS_SUCCESS: {
      const notificationsArr = action.data.map((n) => ({
        id:      n.id,
        isRead:  false,
        type:    n.context?.type ?? n.type,
        value:   n.context?.value ?? n.value,
      }));
      const notificationsMap = Map(
        notificationsArr.map((n) => [n.id, Map(n)])
      );
      return state.set('notifications', notificationsMap);
    }

    case MARK_AS_READ:
      return state.updateIn(
        ['notifications', String(action.index), 'isRead'],
        () => true
      );

    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);

    default:
      return state;
  }
}
