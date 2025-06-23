import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  defaultRow: {
    backgroundColor: '#f5f5f5ab',
  },
  headerRow: {
    backgroundColor: '#deb5b545',
  },
  rowChecked: {
    backgroundColor: '#e6e4e4',
  },
});

export default function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const [checked, setChecked] = useState(false);
  const rowStyle = isHeader
    ? styles.headerRow
    : checked
      ? styles.rowChecked
      : styles.defaultRow;

  if (isHeader) {
    if (textSecondCell == null) {
      return (
        <tr className={css(rowStyle)}>
          <th colSpan="2">{textFirstCell}</th>
        </tr>
      );
    }
    return (
      <tr className={css(rowStyle)}>
        <th>{textFirstCell}</th>
        <th>{textSecondCell}</th>
      </tr>
    );
  }

  return (
    <tr className={css(rowStyle)}>
      <td>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        {textFirstCell}
      </td>
      <td>{textSecondCell}</td>
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader:       PropTypes.bool,
  textFirstCell:  PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader:       false,
  textSecondCell: null,
};
