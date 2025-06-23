import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import { App, mapStateToProps } from './App';

describe('App rendering based on props', () => {
  const defaultProps = {
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
    const wrapper = shallow(<App {...defaultProps} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('displays Login component when isLoggedIn is false', () => {
    const wrapper = shallow(<App {...defaultProps} />);
    expect(wrapper.find('Login')).toHaveLength(1);
    expect(wrapper.find('CourseList')).toHaveLength(0);
  });

  it('displays CourseList component when isLoggedIn is true', () => {
    const props = { ...defaultProps, isLoggedIn: true };
    const wrapper = shallow(<App {...props} />);
    expect(wrapper.find('CourseList')).toHaveLength(1);
    expect(wrapper.find('Login')).toHaveLength(0);
  });
});

describe('mapStateToProps', () => {
  it('maps state.uiReducer to props correctly', () => {
    const state = {
      uiReducer: fromJS({
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
