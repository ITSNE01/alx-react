import React from 'react';
import { shallow } from 'enzyme';
import App, { defaultUser } from './App';
import AppContext from './AppContext';

describe('<App /> context and state', () => {
  it('default state.user is defaultUser', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('user')).toEqual(defaultUser);
  });

  it('logIn updates state.user correctly', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    instance.logIn('alice@example.com', 'pass');
    expect(wrapper.state('user')).toEqual({
      email: 'alice@example.com',
      password: 'pass',
      isLoggedIn: true,
    });
  });

  it('logOut resets state.user to defaultUser', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    // First log in
    instance.logIn('bob@example.com', 'secret');
    expect(wrapper.state('user').isLoggedIn).toBe(true);

    // Then log out
    instance.logOut();
    expect(wrapper.state('user')).toEqual(defaultUser);
  });
});
