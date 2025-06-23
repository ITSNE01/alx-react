import React from 'react';
import { shallow } from 'enzyme';
import { Notifications } from './Notifications';
import {
  setLoadingState,
  setNotifications,
  fetchNotifications,
} from '../actions/notificationActionCreators';

describe('<Notifications />', () => {
  it('calls fetchNotifications on mount', () => {
    const fetchMock = jest.fn();
    shallow(
      <Notifications
        displayDrawer={false}
        listNotifications={[]}
        handleDisplayDrawer={() => {}}
        handleHideDrawer={() => {}}
        fetchNotifications={fetchMock}
      />
    );
    expect(fetchMock).toHaveBeenCalled();
  });
});

describe('notification action creators', () => {
  it('setLoadingState returns correct action', () => {
    expect(setLoadingState(true)).toEqual({
      type: 'SET_LOADING_STATE',
      isLoading: true,
    });
  });

  it('setNotifications returns correct action', () => {
    const data = [{ id: 'x' }];
    expect(setNotifications(data)).toEqual({
      type: 'FETCH_NOTIFICATIONS_SUCCESS',
      data,
    });
  });

  it('fetchNotifications returns a function', () => {
    expect(typeof fetchNotifications()).toBe('function');
  });
});
