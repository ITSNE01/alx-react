import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App /> stateful displayDrawer', () => {
  it('default state displayDrawer is false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('displayDrawer')).toBe(false);
  });

  it('handleDisplayDrawer sets displayDrawer to true', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state('displayDrawer')).toBe(true);
  });

  it('handleHideDrawer sets displayDrawer to false', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ displayDrawer: true });
    expect(wrapper.state('displayDrawer')).toBe(true);

    wrapper.instance().handleHideDrawer();
    expect(wrapper.state('displayDrawer')).toBe(false);
  });
});
