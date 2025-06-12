import { StyleSheetTestUtils } from 'aphrodite';
beforeAll(() => StyleSheetTestUtils.suppressStyleInjection());
afterAll(()  => StyleSheetTestUtils.clearBufferAndResumeStyleInjection());
import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';

describe('<BodySectionWithMarginBottom />', () => {
  it('renders a BodySection and passes props correctly', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="margin title">
        <span>child</span>
      </BodySectionWithMarginBottom>
    );
    // outer div with class
    expect(wrapper.find('.bodySectionWithMargin')).toHaveLength(1);
    // inner component
    const inner = wrapper.find(BodySection);
    expect(inner).toHaveLength(1);
    expect(inner.prop('title')).toBe('margin title');
    expect(inner.prop('children')).toEqual(<span>child</span>);
  });
});
