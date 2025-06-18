import React from 'react';
import { mount } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

import Footer from './Footer';
import AppContext, { defaultUser, defaultLogOut } from '../App/AppContext';

describe('<Footer /> with Context consumer', () => {
  beforeAll(() => StyleSheetTestUtils.suppressStyleInjection());
  afterAll(() => StyleSheetTestUtils.clearBufferAndResumeStyleInjection());

  it('does not display Contact us when user is logged out', () => {
    const contextValue = {
      user: { email: '', password: '', isLoggedIn: false },
      logOut: defaultLogOut,
    };
    const wrapper = mount(
      <AppContext.Provider value={contextValue}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('a').exists()).toBe(false);
  });

  it('displays Contact us when user.isLoggedIn is true', () => {
    const contextValue = {
      user: { email: 'foo@bar.com', password: 'pwd', isLoggedIn: true },
      logOut: defaultLogOut,
    };
    const wrapper = mount(
      <AppContext.Provider value={contextValue}>
        <Footer />
      </AppContext.Provider>
    );
    const link = wrapper.find('a');
    expect(link.exists()).toBe(true);
    expect(link.text()).toBe('Contact us');
  });
});
