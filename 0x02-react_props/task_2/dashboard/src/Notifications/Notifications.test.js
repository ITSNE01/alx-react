import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('<Notifications />', () => {
  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('renders 3 NotificationItem elements', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  it('first NotificationItem renders correct html', () => {
    const wrapper = shallow(<Notifications />);
    const firstItem = wrapper.find(NotificationItem).first().dive();
    expect(firstItem.html()).toBe('<li data-notification-type="default">New course available</li>');
  });
});
