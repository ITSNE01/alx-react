import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
} from './notificationActionTypes';

import {
  markAsAread,
  setNotificationFilter,
} from './notificationActionCreators';

describe('notificationActionCreators', () => {
  it('markAsAread(1) creates MARK_AS_READ action', () => {
    expect(markAsAread(1)).toEqual({
      type:  MARK_AS_READ,
      index: 1,
    });
  });

  it('setNotificationFilter(DEFAULT) creates SET_TYPE_FILTER action', () => {
    expect(setNotificationFilter(NotificationTypeFilters.DEFAULT)).toEqual({
      type:   SET_TYPE_FILTER,
      filter: NotificationTypeFilters.DEFAULT,
    });
  });

  it('setNotificationFilter(URGENT) creates SET_TYPE_FILTER action', () => {
    expect(setNotificationFilter(NotificationTypeFilters.URGENT)).toEqual({
      type:   SET_TYPE_FILTER,
      filter: NotificationTypeFilters.URGENT,
    });
  });
});
