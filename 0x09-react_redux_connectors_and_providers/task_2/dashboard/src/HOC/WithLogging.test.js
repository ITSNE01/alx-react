import React from 'react';
import { mount } from 'enzyme';
import WithLogging from './WithLogging';
import Login from '../Login/Login';

describe('WithLogging HOC', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('logs mount and unmount for a plain HTML component as "Component"', () => {
    const Plain = WithLogging(() => <p />);
    const wrapper = mount(<Plain />);

    expect(consoleSpy).toHaveBeenCalledWith('Component Component is mounted');
    wrapper.unmount();
    expect(consoleSpy).toHaveBeenCalledWith('Component Component is going to unmount');
  });

  it('logs mount and unmount with the wrapped component name (Login)', () => {
    const WrappedLogin = WithLogging(Login);
    const wrapper = mount(<WrappedLogin />);

    expect(consoleSpy).toHaveBeenCalledWith('Component Login is mounted');
    wrapper.unmount();
    expect(consoleSpy).toHaveBeenCalledWith('Component Login is going to unmount');
  });
});

