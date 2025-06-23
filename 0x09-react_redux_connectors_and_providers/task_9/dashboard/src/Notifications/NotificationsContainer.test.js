import React from 'react';
import { shallow } from 'enzyme';
import { NotificationsContainer } from './NotificationsContainer';

describe('<NotificationsContainer />', () => {
  it('fetchNotifications is called on mount', () => {
    const fetchMock = jest.fn();
    const props = {
      fetchNotifications: fetchMock,
      markAsAread:        () => {},
      setNotificationFilter: () => {},
      listNotifications:  [],
      displayDrawer:      false,
      handleDisplayDrawer: () => {},
      handleHideDrawer:    () => {},
    };
    shallow(<NotificationsContainer {...props} />);
    expect(fetchMock).toHaveBeenCalled();
  });

  it('passes props through to Notifications child', () => {
    const fetchMock = jest.fn();
    const childProps = {
      fetchNotifications: fetchMock,
      markAsAread:        jest.fn(),
      setNotificationFilter: jest.fn(),
      handleDisplayDrawer: jest.fn(),
      handleHideDrawer:    jest.fn(),
      listNotifications:  [{ id: '1', type: 'default', value: 'X' }],
      displayDrawer:      true,
    };
    const wrapper = shallow(<NotificationsContainer {...childProps} />);
    const notifications = wrapper.find('Notifications');
    expect(notifications.props()).toMatchObject(childProps);
  });
});
