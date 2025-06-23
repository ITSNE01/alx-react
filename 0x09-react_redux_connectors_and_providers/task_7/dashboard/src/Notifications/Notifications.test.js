import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import { Notifications } from './Notifications';
import NotificationItem from './NotificationItem';

describe('<Notifications />', () => {
  const baseProps = {
    displayDrawer: false,
    listNotifications: [],
    handleDisplayDrawer: jest.fn(),
    handleHideDrawer: jest.fn(),
    fetchNotifications: jest.fn(),
    markAsAread: jest.fn(),
  };

  it('calls fetchNotifications on mount', () => {
    shallow(<Notifications {...baseProps} />);
    expect(baseProps.fetchNotifications).toHaveBeenCalled();
  });

  it('renders menu item always', () => {
    const wrapper = shallow(<Notifications {...baseProps} />);
    expect(wrapper.find('div').at(0).text()).toBe('Your notifications');
  });

  it('does not render drawer when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications {...baseProps} />);
    expect(wrapper.find('div').someWhere(n => n.hasClass('Notifications'))).toBe(false);
  });

  it('renders drawer when displayDrawer is true', () => {
    const props = { ...baseProps, displayDrawer: true };
    const wrapper = shallow(<Notifications {...props} />);
    expect(wrapper.find('.Notifications')).toHaveLength(0); // aphrodite classes differ, check ul
    expect(wrapper.find('ul')).toHaveLength(1);
  });

  it('clicking a NotificationItem calls markAsAread', () => {
    const props = {
      ...baseProps,
      displayDrawer: true,
      listNotifications: [
        { id: '1', type: 'default', value: 'one' },
      ],
    };
    const wrapper = shallow(<Notifications {...props}/>);
    const item = wrapper.find(NotificationItem);
    item.simulate('click');
    expect(props.markAsAread).toHaveBeenCalledWith('1');
  });
});
