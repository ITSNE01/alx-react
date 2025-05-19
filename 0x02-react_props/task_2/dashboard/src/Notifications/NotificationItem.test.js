import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('<NotificationItem />', () => {
  it('renders without crashing', () => {
    shallow(<NotificationItem type="default" value="test" />);
  });

  it('renders correct html when given type and value props', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    const li = wrapper.find('li');
    expect(li.prop('data-notification-type')).toBe('default');
    expect(li.text()).toBe('test');
  });

  it('renders correct html when given html prop', () => {
    const html = { __html: '<u>test</u>' };
    const wrapper = shallow(<NotificationItem type="urgent" html={html} />);
    const li = wrapper.find('li');
    expect(li.prop('data-notification-type')).toBe('urgent');
    expect(li.html()).toBe('<li data-notification-type="urgent"><u>test</u></li>');
  });
});
