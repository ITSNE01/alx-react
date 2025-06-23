import React from 'react';
import { shallow } from 'enzyme';
import { Notifications } from './Notifications';
import NotificationItem from './NotificationItem';

describe('<Notifications /> filters', () => {
  const baseProps = {
    displayDrawer:        true,
    listNotifications:    [
      { id: '1', type: 'default', value: 'First' },
      { id: '2', type: 'urgent',  value: 'Second' },
    ],
    handleDisplayDrawer:  jest.fn(),
    handleHideDrawer:     jest.fn(),
    fetchNotifications:   jest.fn(),
    markAsAread:          jest.fn(),
    setNotificationFilter: jest.fn(),
  };

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Notifications {...baseProps} />);
  });

  it('calls setNotificationFilter("URGENT") when urgent filter button clicked', () => {
    const urgentBtn = wrapper
      .find('button')
      .filterWhere((n) => n.text() === '‼️');
    urgentBtn.simulate('click');
    expect(baseProps.setNotificationFilter).toHaveBeenCalledWith('URGENT');
  });

  it('calls setNotificationFilter("DEFAULT") when default filter button clicked', () => {
    const defaultBtn = wrapper
      .find('button')
      .filterWhere((n) => n.text() === '💠');
    defaultBtn.simulate('click');
    expect(baseProps.setNotificationFilter).toHaveBeenCalledWith('DEFAULT');
  });
});
