import React from 'react';
import { shallow } from 'enzyme';
import { Footer } from './Footer';

describe('<Footer />', () => {
  it('renders without crashing when user not logged in', () => {
    const wrapper = shallow(<Footer user={{ isLoggedIn: false }} />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('a')).toHaveLength(0);
  });

  it('renders "Contact us" link when user is logged in', () => {
    const wrapper = shallow(<Footer user={{ isLoggedIn: true }} />);
    expect(wrapper.find('a')).toHaveLength(1);
    expect(wrapper.find('a').text()).toBe('Contact us');
  });
});
