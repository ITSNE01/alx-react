import { fromJS } from 'immutable';
import {
  getUnreadNotificationsByType,
} from './notificationSelector';

describe('getUnreadNotificationsByType selector', () => {
  const notifications = {
    notifications: {
      '1': { id: '1', isRead: false, type: 'default', value: 'A' },
      '2': { id: '2', isRead: false, type: 'urgent',  value: 'B' },
      '3': { id: '3', isRead: true,  type: 'urgent',  value: 'C' },
    },
    filter: 'DEFAULT',
  };
  const state = {
    notifications: fromJS(notifications),
  };

  it('returns all unread notifications when filter is DEFAULT', () => {
    const result = getUnreadNotificationsByType(state).toJS();
    expect(result).toEqual([
      { id: '1', isRead: false, type: 'default', value: 'A' },
      { id: '2', isRead: false, type: 'urgent',  value: 'B' },
    ]);
  });

  it('returns only unread & urgent when filter is URGENT', () => {
    const urgentState = {
      notifications: fromJS({
        ...notifications,
        filter: 'URGENT',
      }),
    };
    const result = getUnreadNotificationsByType(urgentState).toJS();
    expect(result).toEqual([
      { id: '2', isRead: false, type: 'urgent', value: 'B' },
    ]);
  });
});
