import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('<CourseListRow />', () => {
  it('renders one cell with colspan=2 when isHeader and no second cell', () => {
    const wrapper = shallow(<CourseListRow isHeader textFirstCell="Header" />);
    const th = wrapper.find('th');
    expect(th).toHaveLength(1);
    expect(th.prop('colSpan')).toBe('2');
    expect(th.text()).toBe('Header');
  });

  it('renders two header cells when isHeader and second cell provided', () => {
    const wrapper = shallow(
      <CourseListRow isHeader textFirstCell="Col1" textSecondCell="Col2" />
    );
    const th = wrapper.find('th');
    expect(th).toHaveLength(2);
    expect(th.at(0).text()).toBe('Col1');
    expect(th.at(1).text()).toBe('Col2');
  });

  it('renders two td cells when not header', () => {
    const wrapper = shallow(
      <CourseListRow textFirstCell="Data1" textSecondCell="Data2" />
    );
    const td = wrapper.find('td');
    expect(td).toHaveLength(2);
    expect(td.at(0).text()).toBe('Data1');
    expect(td.at(1).text()).toBe('Data2');
  });
});
