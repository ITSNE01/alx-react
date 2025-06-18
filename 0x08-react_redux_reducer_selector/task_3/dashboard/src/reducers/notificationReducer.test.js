import notificationReducer from './notificationReducer';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
} from '../actions/notificationActionTypes';

describe('notificationReducer', () => {
  const sampleData = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent',  value: 'New resume available' },
    { id: 3, type: 'urgent',  value: 'New data available' },
  ];

  it('returns initial state when no action is passed', () => {
    expect(notificationReducer(undefined, {})).toEqual({
      filter: NotificationTypeFilters.DEFAULT,
      notifications: [],
    });
  });

  it('handles FETCH_NOTIFICATIONS_SUCCESS by setting notifications with isRead=false', () => {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: sampleData,
    };
    const nextState = notificationReducer(undefined, action);
    expect(nextState).toEqual({
      filter: NotificationTypeFilters.DEFAULT,
      notifications: [
        { ...sampleData[0], isRead: false },
        { ...sampleData[1], isRead: false },
        { ...sampleData[2], isRead: false },
      ],
    });
  });

  it('handles MARK_AS_READ by marking the specified notification isRead=true', () => {
    const populatedState = {
      filter: NotificationTypeFilters.DEFAULT,
      notifications: sampleData.map((n) => ({ ...n, isRead: false })),
    };
    const action = { type: MARK_AS_READ, index: 2 };
    const nextState = notificationReducer(populatedState, action);

    expect(nextState.notifications).toEqual([
      { id: 1, type: 'default', value: 'New course available', isRead: false },
      { id: 2, type: 'urgent',  value: 'New resume available',  isRead: true },
      { id: 3, type: 'urgent',  value: 'New data available',    isRead: false },
    ]);
    // filter remains unchanged
    expect(nextState.filter).toBe(NotificationTypeFilters.DEFAULT);
  });

  it('handles SET_TYPE_FILTER by updating filter only', () => {
    const populatedState = {
      filter: NotificationTypeFilters.DEFAULT,
      notifications: sampleData.map((n) => ({ ...n, isRead: false })),
    };
    const action = {
      type: SET_TYPE_FILTER,
      filter: NotificationTypeFilters.URGENT,
    };
    const nextState = notificationReducer(populatedState, action);

    expect(nextState.filter).toBe(NotificationTypeFilters.URGENT);
    // notifications list remains unchanged
    expect(nextState.notifications).toEqual(populatedState.notifications);
  });
});
