import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
beforeAll(() => StyleSheetTestUtils.suppressStyleInjection());
afterAll(() => StyleSheetTestUtils.clearBufferAndResumeStyleInjection());
import NotificationItem from './NotificationItem';

describe('<NotificationItem /> click handling', () => {
  it('calls markAsRead with the correct id on click', () => {
    const markAsReadMock = jest.fn();
    const wrapper = shallow(
      <NotificationItem
        id={7}
        type="default"
        value="Test"
        markAsRead={markAsReadMock}
      />
    );
    wrapper.find('li').simulate('click');
    expect(markAsReadMock).toHaveBeenCalledWith(7);
  });
});
