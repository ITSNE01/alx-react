import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('<CourseListRow /> styling', () => {
  it('applies headerStyle when isHeader and no second cell', () => {
    const wrapper = shallow(
      <CourseListRow isHeader textFirstCell="Header" />
    );
    const tr = wrapper.find('tr');
    expect(tr.prop('style')).toEqual({ backgroundColor: '#deb5b545' });
  });

  it('applies headerStyle when isHeader with both cells', () => {
    const wrapper = shallow(
      <CourseListRow isHeader textFirstCell="Col1" textSecondCell="Col2" />
    );
    const tr = wrapper.find('tr');
    expect(tr.prop('style')).toEqual({ backgroundColor: '#deb5b545' });
  });

  it('applies rowStyle when not header', () => {
    const wrapper = shallow(
      <CourseListRow textFirstCell="Data1" textSecondCell="Data2" />
    );
    const tr = wrapper.find('tr');
    expect(tr.prop('style')).toEqual({ backgroundColor: '#f5f5f5ab' });
  });
});
