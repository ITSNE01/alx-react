import notificationReducer from './notificationReducer';
import { Map } from 'immutable';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
} from '../actions/notificationActionTypes';

describe('notificationReducer (Immutable + Normalizr)', () => {
  const sampleData = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent',  value: 'New resume available' },
    { id: 3, type: 'urgent',  value: 'New data available' },
  ];

  it('returns initial state', () => {
    expect(notificationReducer(undefined, {}).toJS()).toEqual({
      filter: NotificationTypeFilters.DEFAULT,
      notifications: {},
    });
  });

  it('handles FETCH_NOTIFICATIONS_SUCCESS by normalizing (isRead:false)', () => {
    const nextState = notificationReducer(undefined, {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: sampleData,
    });
    expect(nextState.toJS()).toEqual({
      filter: NotificationTypeFilters.DEFAULT,
      notifications: {
        '1': { id: 1, type: 'default', value: 'New course available', isRead: false },
        '2': { id: 2, type: 'urgent',  value: 'New resume available',  isRead: false },
        '3': { id: 3, type: 'urgent',  value: 'New data available',    isRead: false },
      },
    });
  });

  it('handles MARK_AS_READ: sets isRead=true on that notification', () => {
    let state = notificationReducer(undefined, {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: sampleData,
    });
    const nextState = notificationReducer(state, {
      type: MARK_AS_READ,
      index: 2,
    });
    expect(nextState.toJS().notifications['2'].isRead).toBe(true);
  });

  it('handles SET_TYPE_FILTER: updates filter only', () => {
    const populated = notificationReducer(undefined, {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: sampleData,
    });
    const nextState = notificationReducer(populated, {
      type: SET_TYPE_FILTER,
      filter: NotificationTypeFilters.URGENT,
    });
    expect(nextState.toJS().filter).toBe(NotificationTypeFilters.URGENT);
    expect(nextState.toJS().notifications).toEqual(
      populated.toJS().notifications
    );
  });
});
