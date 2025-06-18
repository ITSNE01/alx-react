import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import Login from './Login';

describe('<Login /> form behavior', () => {
  beforeAll(() => StyleSheetTestUtils.suppressStyleInjection());
  afterAll(()  => StyleSheetTestUtils.clearBufferAndResumeStyleInjection());

  it('submit button is disabled by default', () => {
    const wrapper = shallow(<Login />);
    const submitBtn = wrapper.find('input[type="submit"]');
    expect(submitBtn.prop('disabled')).toBe(true);
  });

  it('submit button is enabled when both inputs have text', () => {
    const wrapper = shallow(<Login />);
    const emailInput = wrapper.find('input#email');
    const passInput = wrapper.find('input#password');
    const submitBtn = () => wrapper.find('input[type="submit"]');

    // Simulate entering email
    emailInput.simulate('change', { target: { value: 'user@example.com' } });
    // Still missing password, so button stays disabled
    expect(submitBtn().prop('disabled')).toBe(true);

    // Now enter password
    passInput.simulate('change', { target: { value: 'secret' } });
    wrapper.update();
    expect(submitBtn().prop('disabled')).toBe(false);
  });
});
