import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import App, { mapStateToProps } from './App';
import { defaultUser } from './AppContext';

describe('<App /> state and notification removal', () => {
  it('initial state.user equals defaultUser', () => {
    const wrapper = shallow(<App listCourses={[]} listNotifications={[]} />);
    expect(wrapper.state('user')).toEqual(defaultUser);
  });

  it('logIn updates state.user correctly', () => {
    const wrapper = shallow(<App listCourses={[]} listNotifications={[]} />);
    const instance = wrapper.instance();
    instance.logIn('alice@example.com', 'pass');
    expect(wrapper.state('user')).toEqual({
      email: 'alice@example.com',
      password: 'pass',
      isLoggedIn: true,
    });
  });

  it('logOut resets state.user to defaultUser', () => {
    const wrapper = shallow(<App listCourses={[]} listNotifications={[]} />);
    const instance = wrapper.instance();
    instance.logIn('bob@example.com', 'secret');
    expect(wrapper.state('user').isLoggedIn).toBe(true);

    instance.logOut();
    expect(wrapper.state('user')).toEqual(defaultUser);
  });

  it('markNotificationAsRead removes the correct notification', () => {
    const initialNotifs = [
      { id: 1, type: 'default', value: 'One' },
      { id: 2, type: 'urgent', value: 'Two' },
      { id: 3, type: 'urgent', value: 'Three' },
    ];
    const wrapper = shallow(
      <App listCourses={[]} listNotifications={initialNotifs} />
    );
    expect(wrapper.state('listNotifications')).toHaveLength(3);

    wrapper.instance().markNotificationAsRead(2);
    expect(wrapper.state('listNotifications')).toHaveLength(2);
    expect(
      wrapper.state('listNotifications').find((n) => n.id === 2)
    ).toBeUndefined();
  });
});

describe('mapStateToProps', () => {
  it('returns { isLoggedIn: true } when state.uiReducer.isUserLoggedIn is true', () => {
    const state = { uiReducer: fromJS({ isUserLoggedIn: true }) };
    const props = mapStateToProps(state);
    expect(props).toEqual({ isLoggedIn: true });
  });
});
