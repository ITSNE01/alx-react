import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header';

describe('<Header />', () => {
  const baseProps = {
    user: { isLoggedIn: false, email: '' },
    logout: jest.fn(),
  };

  it('renders without crashing when logged out', () => {
    const wrapper = shallow(<Header {...baseProps} />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('#logoutSection')).toHaveLength(0);
  });

  it('renders logout section when user is logged in', () => {
    const props = {
      user: { isLoggedIn: true, email: 'test@ex.com' },
      logout: jest.fn(),
    };
    const wrapper = shallow(<Header {...props} />);
    expect(wrapper.find('#logoutSection')).toHaveLength(1);
    expect(wrapper.find('#logoutSection').text()).toContain('Welcome test@ex.com');
  });

  it('calls logout prop on clicking logout link', () => {
    const logoutMock = jest.fn();
    const props = {
      user: { isLoggedIn: true, email: 'test@ex.com' },
      logout: logoutMock,
    };
    const wrapper = shallow(<Header {...props} />);
    wrapper.find('span').simulate('click');
    expect(logoutMock).toHaveBeenCalled();
  });
});
