import React from 'react';
import { mount } from 'enzyme';
import Notifications from './Notifications';

describe('<Notifications /> shouldComponentUpdate', () => {
  let wrapper;
  const list1 = [
    { id: 1, type: 'default', value: 'New course available' },
  ];
  const list2 = [
    ...list1,
    { id: 2, type: 'urgent', value: 'New resume available' },
  ];

  beforeEach(() => {
    // Spy on render to count how many times component actually renders
    jest.spyOn(Notifications.prototype, 'render');
    wrapper = mount(<Notifications displayDrawer listNotifications={list1} />);
    // clear initial render count
    Notifications.prototype.render.mockClear();
  });

  afterEach(() => {
    jest.restoreAllMocks();
    wrapper.unmount();
  });

  it('does NOT rerender when props.listNotifications length stays the same', () => {
    wrapper.setProps({ listNotifications: list1 });
    expect(Notifications.prototype.render).not.toHaveBeenCalled();
  });

  it('does rerender when props.listNotifications length increases', () => {
    wrapper.setProps({ listNotifications: list2 });
    expect(Notifications.prototype.render).toHaveBeenCalled();
  });
});
