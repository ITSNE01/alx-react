import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  defaultRow: { backgroundColor: '#f5f5f5ab' },
  headerRow:  { backgroundColor: '#deb5b545' },
});

export default function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const rowClass = isHeader ? styles.headerRow : styles.defaultRow;

  if (isHeader) {
    if (textSecondCell == null) {
      return (
        <tr className={css(rowClass)}>
          <th colSpan="2">{textFirstCell}</th>
        </tr>
      );
    }
    return (
      <tr className={css(rowClass)}>
        <th>{textFirstCell}</th>
        <th>{textSecondCell}</th>
      </tr>
    );
  }

  return (
    <tr className={css(rowClass)}>
      <td>{textFirstCell}</td>
      <td>{textSecondCell}</td>
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader:        PropTypes.bool,
  textFirstCell:   PropTypes.string.isRequired,
  textSecondCell:  PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader:       false,
  textSecondCell: null,
};
