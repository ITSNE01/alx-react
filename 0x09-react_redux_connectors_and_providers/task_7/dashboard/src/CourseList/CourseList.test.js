import React from 'react';
import { shallow } from 'enzyme';
import { CourseList } from './CourseList';

describe('<CourseList /> connector', () => {
  const defaultProps = {
    listCourses:   [],
    fetchCourses:  jest.fn(),
    selectCourse:  jest.fn(),
    unSelectCourse: jest.fn(),
  };

  it('dispatches fetchCourses on mount', () => {
    shallow(<CourseList {...defaultProps} />);
    expect(defaultProps.fetchCourses).toHaveBeenCalled();
  });

  it('onChangeRow(true) calls selectCourse', () => {
    const props = {
      ...defaultProps,
      listCourses: [
        { id: '1', name: 'A', credit: 10, isSelected: false },
      ],
    };
    const wrapper = shallow(<CourseList {...props} />);
    wrapper.instance().onChangeRow('1', true);
    expect(props.selectCourse).toHaveBeenCalledWith('1');
  });

  it('onChangeRow(false) calls unSelectCourse', () => {
    const props = {
      ...defaultProps,
      listCourses: [
        { id: '1', name: 'A', credit: 10, isSelected: true },
      ],
    };
    const wrapper = shallow(<CourseList {...props} />);
    wrapper.instance().onChangeRow('1', false);
    expect(props.unSelectCourse).toHaveBeenCalledWith('1');
  });
});
