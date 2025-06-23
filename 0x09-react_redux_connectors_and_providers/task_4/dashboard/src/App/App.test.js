import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import App, { mapStateToProps } from './App';
import { defaultUser } from './AppContext';

describe('<App /> state and notification removal', () => {
  it('initial state.user equals defaultUser', () => {
    const wrapper = shallow(<App listCourses={[]} listNotifications={[]} isLoggedIn={false} displayDrawer={false} />);
    expect(wrapper.state('user')).toEqual(defaultUser);
  });

  it('markNotificationAsRead removes the correct notification', () => {
    const initialNotifs = [
      { id: 1, type: 'default', value: 'One' },
      { id: 2, type: 'urgent',  value: 'Two' },
      { id: 3, type: 'urgent',  value: 'Three' },
    ];
    const wrapper = shallow(
      <App listCourses={[]} listNotifications={initialNotifs} isLoggedIn={false} displayDrawer={false} />
    );
    expect(wrapper.state('listNotifications')).toHaveLength(3);

    wrapper.instance().markNotificationAsRead(2);
    expect(wrapper.state('listNotifications')).toHaveLength(2);
    expect(wrapper.state('listNotifications').find(n => n.id === 2)).toBeUndefined();
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
