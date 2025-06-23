import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CourseListRow from './CourseListRow';
import {
  fetchCourses,
  selectCourse,
  unSelectCourse,
} from '../actions/courseActionCreators';
import { getCourses } from '../selectors/courseSelector';

export class CourseList extends Component {
  componentDidMount() {
    this.props.fetchCourses();
  }

  onChangeRow(id, checked) {
    if (checked) {
      this.props.selectCourse(id);
    } else {
      this.props.unSelectCourse(id);
    }
  }

  render() {
    const { listCourses } = this.props;

    return (
      <table id="CourseList">
        <thead>
          <CourseListRow
            isHeader
            textFirstCell="Available courses"
          />
          <CourseListRow
            isHeader
            textFirstCell="Course name"
            textSecondCell="Credit"
          />
        </thead>
        <tbody>
          {listCourses.length === 0 ? (
            <tr>
              <td colSpan="3">No course available yet</td>
            </tr>
          ) : (
            listCourses.map((course) => (
              <CourseListRow
                key={course.id}
                textFirstCell={course.name}
                textSecondCell={course.credit}
                isChecked={course.isSelected}
                onChangeRow={(checked) =>
                  this.onChangeRow(course.id, checked)
                }
              />
            ))
          )}
        </tbody>
      </table>
    );
  }
}

CourseList.propTypes = {
  fetchCourses:  PropTypes.func.isRequired,
  selectCourse:  PropTypes.func.isRequired,
  unSelectCourse: PropTypes.func.isRequired,
  listCourses:   PropTypes.arrayOf(
    PropTypes.shape({
      id:         PropTypes.string.isRequired,
      name:       PropTypes.string.isRequired,
      credit:     PropTypes.number.isRequired,
      isSelected: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

const mapStateToProps = (state) => ({
  listCourses: getCourses(state).toJS(),
});

export default connect(
  mapStateToProps,
  { fetchCourses, selectCourse, unSelectCourse }
)(CourseList);
