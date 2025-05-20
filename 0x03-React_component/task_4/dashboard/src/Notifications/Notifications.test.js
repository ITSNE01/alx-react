import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('<Notifications /> markAsRead', () => {
  it('markAsRead logs the correct message', () => {
    const wrapper = shallow(<Notifications displayDrawer listNotifications={[]} />);
    const instance = wrapper.instance();
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    instance.markAsRead(42);
    expect(consoleSpy).toHaveBeenCalledWith('Notification 42 has been marked as read');
    consoleSpy.mockRestore();
  });
});
