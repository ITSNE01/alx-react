import { Map } from 'immutable';
import notificationReducer, { initialState } from './notificationReducer';
import {
  SET_LOADING_STATE,
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from '../actions/notificationActionTypes';

describe('notificationReducer', () => {
  it('should return the initial state', () => {
    expect(notificationReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle SET_LOADING_STATE', () => {
    const state = notificationReducer(initialState, {
      type: SET_LOADING_STATE,
      isLoading: true,
    });
    expect(state.get('loading')).toBe(true);
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
    const raw = [
      { id: 'a', context: { type: 'default', value: 'one' } },
      { id: 'b', context: { type: 'urgent', value: 'two' } },
    ];
    const state = notificationReducer(initialState, {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: raw,
    });
    const notifMap = state.get('notifications');
    expect(notifMap.size).toBe(2);
    expect(notifMap.get('a').toJS()).toEqual({
      id: 'a',
      isRead: false,
      type: 'default',
      value: 'one',
    });
  });

  it('should handle MARK_AS_READ', () => {
    const raw = [
      { id: 'a', context: { type: 'default', value: 'one' } },
    ];
    let state = notificationReducer(initialState, {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: raw,
    });
    state = notificationReducer(state, {
      type: MARK_AS_READ,
      index: 'a',
    });
    expect(state.getIn(['notifications', 'a', 'isRead'])).toBe(true);
  });

  it('should handle SET_TYPE_FILTER', () => {
    const state = notificationReducer(initialState, {
      type: SET_TYPE_FILTER,
      filter: 'URGENT',
    });
    expect(state.get('filter')).toBe('URGENT');
  });
});
