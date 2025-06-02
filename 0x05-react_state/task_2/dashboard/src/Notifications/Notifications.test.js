import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import Notifications from './Notifications';

describe('<Notifications /> interactions', () => {
  beforeAll(() => StyleSheetTestUtils.suppressStyleInjection());
  afterAll(()  => StyleSheetTestUtils.clearBufferAndResumeStyleInjection());

  it('clicking menu item calls handleDisplayDrawer', () => {
    const handleDisplayDrawerMock = jest.fn();
    const handleHideDrawerMock    = jest.fn();
    const wrapper = shallow(
      <Notifications
        displayDrawer={false}
        listNotifications={[]}
        handleDisplayDrawer={handleDisplayDrawerMock}
        handleHideDrawer={handleHideDrawerMock}
      />
    );

    const menuDiv = wrapper.find('[data-testid="menuItem"]');
    expect(menuDiv).toHaveLength(1);
    menuDiv.simulate('click');
    expect(handleDisplayDrawerMock).toHaveBeenCalled();
  });

  it('clicking close button calls handleHideDrawer', () => {
    const handleDisplayDrawerMock = jest.fn();
    const handleHideDrawerMock    = jest.fn();
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={[]}
        handleDisplayDrawer={handleDisplayDrawerMock}
        handleHideDrawer={handleHideDrawerMock}
      />
    );

    const closeBtn = wrapper.find('[data-testid="closeButton"]');
    expect(closeBtn).toHaveLength(1);
    closeBtn.simulate('click');
    expect(handleHideDrawerMock).toHaveBeenCalled();
  });
});
