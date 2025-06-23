import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import { App, mapStateToProps } from './App';
import { defaultUser } from './AppContext';

describe('App rendering based on props', () => {
  const baseProps = {
    listCourses: [],
    listNotifications: [],
    isLoggedIn: false,
    displayDrawer: false,
    displayNotificationDrawer: jest.fn(),
    hideNotificationDrawer: jest.fn(),
    loginRequest: jest.fn(),
    logout: jest.fn(),
  };

  it('renders without crashing when not logged in', () => {
    const wrapper = shallow(<App {...baseProps} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('displays Login when isLoggedIn is false', () => {
    const wrapper = shallow(<App {...baseProps} />);
    expect(wrapper.find('Login')).toHaveLength(1);
    expect(wrapper.find('CourseList')).toHaveLength(0);
  });

  it('displays CourseList when isLoggedIn is true', () => {
    const props = { ...baseProps, isLoggedIn: true };
    const wrapper = shallow(<App {...props} />);
    expect(wrapper.find('CourseList')).toHaveLength(1);
    expect(wrapper.find('Login')).toHaveLength(0);
  });
});

describe('mapStateToProps', () => {
  it('maps state.ui to props correctly', () => {
    const state = {
      ui: fromJS({
        isUserLoggedIn: true,
        isNotificationDrawerVisible: false,
      }),
    };
    const props = mapStateToProps(state);
    expect(props).toEqual({
      isLoggedIn: true,
      displayDrawer: false,
    });
  });
});
