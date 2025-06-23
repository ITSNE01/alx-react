import { Map } from 'immutable';
import notificationReducer from '../reducers/notificationReducer';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
} from '../actions/notificationActionTypes';

import {
  filterTypeSelected,
  getNotifications,
  getUnreadNotifications,
} from './notificationSelector';

describe('notification selectors', () => {
  const sampleData = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent',  value: 'New resume available' },
    { id: 3, type: 'urgent',  value: 'New data available' },
  ];

  // build a state with notifications loaded, one marked read, filter set
  const loadedState = notificationReducer(undefined, {
    type: FETCH_NOTIFICATIONS_SUCCESS,
    data: sampleData,
  });
  const readState = notificationReducer(loadedState, {
    type: MARK_AS_READ,
    index: 2,
  });
  const filteredState = notificationReducer(readState, {
    type: SET_TYPE_FILTER,
    filter: NotificationTypeFilters.URGENT,
  });

  it('filterTypeSelected returns the filter', () => {
    expect(filterTypeSelected(filteredState)).toBe(NotificationTypeFilters.URGENT);
  });

  it('getNotifications returns all notifications as a Map', () => {
    const notes = getNotifications(loadedState);
    expect(Map.isMap(notes)).toBe(true);
    // toJS compare
    expect(notes.toJS()).toEqual({
      '1': { id: 1, type: 'default', value: 'New course available', isRead: false },
      '2': { id: 2, type: 'urgent',  value: 'New resume available',  isRead: false },
      '3': { id: 3, type: 'urgent',  value: 'New data available',    isRead: false },
    });
  });

  it('getUnreadNotifications returns only unread notifications', () => {
    const unread = getUnreadNotifications(readState);
    expect(Map.isMap(unread)).toBe(true);
    expect(unread.toJS()).toEqual({
      '1': { id: 1, type: 'default', value: 'New course available', isRead: false },
      '3': { id: 3, type: 'urgent',  value: 'New data available',    isRead: false },
    });
  });
});
