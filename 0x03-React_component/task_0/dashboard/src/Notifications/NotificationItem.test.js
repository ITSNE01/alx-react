import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('<NotificationItem /> prop-types', () => {
  it('renders without crashing', () => {
    shallow(<NotificationItem type="default" value="test" />);
  });

  it('renders correct value when passed value prop', () => {
    const wrapper = shallow(<NotificationItem type="default" value="hello" />);
    expect(wrapper.find('li').text()).toBe('hello');
  });

  it('renders correct html when passed html prop', () => {
    const html = { __html: '<em>world</em>' };
    const wrapper = shallow(<NotificationItem type="urgent" html={html} />);
    expect(wrapper.html()).toContain('<em>world</em>');
  });

  it('throws warning for wrong prop types', () => {
    const spy = jest.spyOn(console, 'error').mockImplementation(() => {});
    shallow(<NotificationItem type={5} />);
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});
