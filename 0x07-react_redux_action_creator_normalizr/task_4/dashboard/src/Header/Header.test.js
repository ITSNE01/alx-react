import React from 'react';
import { mount } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import Header from './Header';
import AppContext, { defaultUser, defaultLogOut } from '../App/AppContext';

describe('<Header /> context integration', () => {
  beforeAll(() => StyleSheetTestUtils.suppressStyleInjection());
  afterAll(()  => StyleSheetTestUtils.clearBufferAndResumeStyleInjection());

  it('does NOT render logoutSection by default', () => {
    // Provide default context (user.isLoggedIn = false)
    const wrapper = mount(
      <AppContext.Provider value={{ user: defaultUser, logOut: defaultLogOut }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('#logoutSection')).toHaveLength(0);
  });

  it('renders logoutSection when user.isLoggedIn is true', () => {
    const mockUser = {
      email: 'test@example.com',
      password: 'pwd',
      isLoggedIn: true,
    };
    const wrapper = mount(
      <AppContext.Provider value={{ user: mockUser, logOut: defaultLogOut }}>
        <Header />
      </AppContext.Provider>
    );
    const logoutDiv = wrapper.find('#logoutSection');
    expect(logoutDiv).toHaveLength(1);
    expect(logoutDiv.text()).toContain('Welcome test@example.com');
  });

  it('clicking logout calls context.logOut', () => {
    const mockUser = {
      email: 'test@example.com',
      password: 'pwd',
      isLoggedIn: true,
    };
    const logOutSpy = jest.fn();
    const wrapper = mount(
      <AppContext.Provider value={{ user: mockUser, logOut: logOutSpy }}>
        <Header />
      </AppContext.Provider>
    );
    const logoutLink = wrapper.find('#logoutSection span');
    logoutLink.simulate('click');
    expect(logOutSpy).toHaveBeenCalled();
  });
});
