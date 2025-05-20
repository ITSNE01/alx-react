import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class NotificationItem extends PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { id, markAsRead } = this.props;
    markAsRead(id);
  }

  render() {
    const { type, value, html } = this.props;
    if (html) {
      return (
        <li
          data-notification-type={type}
          dangerouslySetInnerHTML={html}
          onClick={this.handleClick}
        />
      );
    }
    return (
      <li
        data-notification-type={type}
        onClick={this.handleClick}
      >
        {value}
      </li>
    );
  }
}

NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
  markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  value: '',
  html: null,
  markAsRead: () => {},
};
