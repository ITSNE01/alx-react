import { StyleSheetTestUtils } from 'aphrodite';
beforeAll(() => StyleSheetTestUtils.suppressStyleInjection());
afterAll(()  => StyleSheetTestUtils.clearBufferAndResumeStyleInjection());
import React from 'react';
import { mount } from 'enzyme';
import App from './App';

describe('<App /> lifecycle and logout shortcut', () => {
  let alertSpy;
  let logOutMock;
  let wrapper;

  beforeEach(() => {
    alertSpy   = jest.spyOn(window, 'alert').mockImplementation(() => {});
    logOutMock = jest.fn();
    wrapper    = mount(<App logOut={logOutMock} />);
  });

  afterEach(() => {
    wrapper.unmount();
    alertSpy.mockRestore();
  });

  it('calls alert and logOut on Ctrl+H press', () => {
    const event = new KeyboardEvent('keydown', { key: 'h', ctrlKey: true });
    document.dispatchEvent(event);
    expect(alertSpy).toHaveBeenCalledWith('Logging you out');
    expect(logOutMock).toHaveBeenCalled();
  });
});
