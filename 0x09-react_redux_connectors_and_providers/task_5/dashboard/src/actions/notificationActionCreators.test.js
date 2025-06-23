import {
  setLoadingState,
  setNotifications,
  fetchNotifications,
} from './notificationActionCreators';

describe('notificationActionCreators', () => {
  it('setLoadingState', () => {
    expect(setLoadingState(false)).toEqual({
      type: 'SET_LOADING_STATE',
      isLoading: false,
    });
  });

  it('setNotifications', () => {
    const arr = [1, 2];
    expect(setNotifications(arr)).toEqual({
      type: 'FETCH_NOTIFICATIONS_SUCCESS',
      data: arr,
    });
  });

  it('fetchNotifications is a thunk', () => {
    expect(typeof fetchNotifications()).toBe('function');
  });
});
