import { Map } from 'immutable';
import rootReducer from './rootReducer';
import { initialState as uiInitial } from './uiReducer';
import { initialState as coursesInitial } from './courseReducer';
import { initialState as notificationsInitial } from './notificationReducer';

describe('rootReducer', () => {
  it('returns the correct initial state shape', () => {
    const state = rootReducer(undefined, {});
    expect(state.ui).toEqual(uiInitial);
    expect(state.courses).toEqual(coursesInitial);
    expect(state.notifications).toEqual(notificationsInitial);
  });
});
