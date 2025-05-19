import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

describe('<App />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('CourseList is not displayed when not logged in', () => {
    expect(wrapper.find(CourseList)).toHaveLength(0);
  });

  describe('when isLoggedIn is true', () => {
    let wrapperLogged;
    beforeEach(() => {
      wrapperLogged = shallow(<App isLoggedIn={true} />);
    });

    it('Login component is not included', () => {
      expect(wrapperLogged.find(Login)).toHaveLength(0);
    });

    it('CourseList component is included', () => {
      expect(wrapperLogged.find(CourseList)).toHaveLength(1);
    });
  });
});
