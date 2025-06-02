import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import CourseListRow from './CourseListRow';

beforeAll(() => StyleSheetTestUtils.suppressStyleInjection());
afterAll(() => StyleSheetTestUtils.clearBufferAndResumeStyleInjection());

describe('<CourseListRow /> styling with Aphrodite', () => {
  it('renders one cell with colspan=2 when isHeader and no second cell', () => {
    const wrapper = shallow(<CourseListRow isHeader textFirstCell="Header" />);
    const th = wrapper.find('th');
    expect(th).toHaveLength(1);
    expect(th.prop('colSpan')).toBe('2');
    const tr = wrapper.find('tr');
    expect(tr.prop('className')).toBeDefined();
  });

  it('renders two header cells when isHeader and second cell provided', () => {
    const wrapper = shallow(
      <CourseListRow isHeader textFirstCell="Col1" textSecondCell="Col2" />
    );
    const th = wrapper.find('th');
    expect(th).toHaveLength(2);
    const tr = wrapper.find('tr');
    expect(tr.prop('className')).toBeDefined();
  });

  it('renders two td cells when not header', () => {
    const wrapper = shallow(
      <CourseListRow textFirstCell="Data1" textSecondCell="Data2" />
    );
    const td = wrapper.find('td');
    expect(td).toHaveLength(2);
    const tr = wrapper.find('tr');
    expect(tr.prop('className')).toBeDefined();
  });
});
