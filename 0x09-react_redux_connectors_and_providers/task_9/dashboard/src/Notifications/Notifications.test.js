import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('<Notifications /> presentation', () => {
  const props = {
    displayDrawer:        true,
    listNotifications:    [
      { id: '1', type: 'default', value: 'A' },
      { id: '2', type: 'urgent',  value: 'B' },
    ],
    handleDisplayDrawer:  jest.fn(),
    handleHideDrawer:     jest.fn(),
    markAsAread:          jest.fn(),
    setNotificationFilter: jest.fn(),
  };
  const wrapper = shallow(<Notifications {...props} />);

  it('renders menu item', () => {
    expect(wrapper.find('div').at(0).text()).toEqual('Your notifications');
  });

  it('renders filter buttons', () => {
    const btns = wrapper.find('button').filterWhere(n => ['‼️','💠'].includes(n.text()));
    expect(btns).toHaveLength(2);
  });

  it('clicking Urgent button calls setNotificationFilter("URGENT")', () => {
    wrapper.find('button').filterWhere(n => n.text() === '‼️').simulate('click');
    expect(props.setNotificationFilter).toHaveBeenCalledWith('URGENT');
  });

  it('clicking Default button calls setNotificationFilter("DEFAULT")', () => {
    wrapper.find('button').filterWhere(n => n.text() === '💠').simulate('click');
    expect(props.setNotificationFilter).toHaveBeenCalledWith('DEFAULT');
  });
});
