import React from 'react';
import PropTypes from 'prop-types';

export default function NotificationItem({ type, value, html }) {
  if (html) {
    return <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>;
  }
  return <li data-notification-type={type}>{value}</li>;
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
};

NotificationItem.defaultProps = {
  value: '',
  html: null,
};
