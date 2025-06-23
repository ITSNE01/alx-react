import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import Notifications from './Notifications';

describe('<Notifications /> with markNotificationAsRead', () => {
  beforeAll(() => StyleSheetTestUtils.suppressStyleInjection());
  afterAll(()  => StyleSheetTestUtils.clearBufferAndResumeStyleInjection());

  it('calls markNotificationAsRead when a NotificationItem is clicked', () => {
    const mockMarkRead = jest.fn();
    const listNotifs = [
      { id: 1, type: 'default', value: 'One' },
      { id: 2, type: 'urgent', value: 'Two' },
    ];
    const wrapper = shallow(
      <Notifications
        displayDrawer
        listNotifications={listNotifs}
        handleDisplayDrawer={() => {}}
        handleHideDrawer={() => {}}
        markNotificationAsRead={mockMarkRead}
      />
    );

    // Grab first NotificationItem and simulate its click
    const firstItem = wrapper.find('NotificationItem').first();
    firstItem.prop('markAsRead')(1);
    expect(mockMarkRead).toHaveBeenCalledWith(1);
  });
});
