import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('<CourseList />', () => {
  describe('when listCourses is empty or not provided', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<CourseList />);
    });

    it('renders without crashing', () => {
      expect(wrapper.exists()).toBe(true);
    });

    it('renders one row saying "No course available yet"', () => {
      const trs = wrapper.find('tbody tr');
      expect(trs).toHaveLength(1);
      expect(trs.find('td').text()).toBe('No course available yet');
    });
  });

  describe('when listCourses has items', () => {
    const courses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<CourseList listCourses={courses} />);
    });

    it('renders a row for each course', () => {
      expect(wrapper.find(CourseListRow)).toHaveLength(5);
      // 2 header rows + 3 data rows
    });

    it('renders correct course name and credit in data rows', () => {
      const dataRows = wrapper.find('tbody').find(CourseListRow);
      expect(dataRows.at(0).prop('textFirstCell')).toBe('ES6');
      expect(dataRows.at(0).prop('textSecondCell')).toBe(60);
    });
  });
});
