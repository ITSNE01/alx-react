import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css, keyframes } from 'aphrodite';

import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import { getLatestNotification } from '../utils/utils';

const fadeKeyframes = keyframes({
  from: { opacity: 0.5 },
  to:   { opacity: 1   },
});

const bounceKeyframes = keyframes({
  '0%':   { transform: 'translateY(0px)' },
  '50%':  { transform: 'translateY(-5px)' },
  '100%': { transform: 'translateY(5px)' },
});

const styles = StyleSheet.create({
  menuItem: {
    position: 'fixed',
    top: 10,
    right: 10,
    backgroundColor: '#fff8f8',
    padding: '5px',
    cursor: 'pointer',
    zIndex: 20,
    ':hover': {
      animationName: [fadeKeyframes, bounceKeyframes],
      animationDuration: '1s, 0.5s',
      animationIterationCount: '3',
      animationDirection: 'alternate',
    },
  },

  drawer: {
    position: 'fixed',
    top: 40,
    right: 10,
    width: 300,
    backgroundColor: 'white',
    border: '2px solid #e11d3f',
    padding: 10,
    boxShadow: '0 3px 6px rgba(0,0,0,0.1)',
    zIndex: 19,
    '@media (max-width: 900px)': {
      top:    0,
      right:  0,
      width:  '100%',
      height: '100%',
      padding: 0,
      border: 'none',
      boxShadow: 'none',
      fontSize: '20px',
    },
  },

  closeButton: {
    float: 'right',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },

  header: {
    margin: '0 0 10px 0',
    '@media (max-width: 900px)': {
      fontSize: '20px',
      margin: '10px',
    },
  },

  list: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },

  noNotif: {
    margin: 0,
    '@media (max-width: 900px)': {
      fontSize: '20px',
      padding: '10px',
    },
  },
});

export default class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length ||
      nextProps.displayDrawer !== this.props.displayDrawer
    );
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const {
      displayDrawer,
      listNotifications,
      handleDisplayDrawer,
      handleHideDrawer,
    } = this.props;

    return (
      <>
        {/* show menu item only if drawer is closed */}
        {!displayDrawer && (
          <div
            className={css(styles.menuItem)}
            onClick={handleDisplayDrawer}
            data-testid="menuItem"
          >
            Your notifications
          </div>
        )}

        {displayDrawer && (
          <div className={css(styles.drawer)} data-testid="drawer">
            <button
              aria-label="Close"
              onClick={handleHideDrawer}
              className={css(styles.closeButton)}
              data-testid="closeButton"
            >
              <img src="../assets/close-icon.png" alt="close icon" />
            </button>

            {listNotifications.length === 0 ? (
              <p className={css(styles.noNotif)}>No new notification for now</p>
            ) : (
              <>
                <p className={css(styles.header)}>
                  Here is the list of notifications
                </p>
                <ul className={css(styles.list)}>
                  {listNotifications.map(({ id, type, value, html }) => (
                    <NotificationItem
                      key={id}
                      id={id}
                      type={type}
                      value={value}
                      html={html}
                      markAsRead={this.markAsRead}
                    />
                  ))}
                </ul>
              </>
            )}
          </div>
        )}
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer:     PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func.isRequired,
  handleHideDrawer:    PropTypes.func.isRequired,
};

Notifications.defaultProps = {
  displayDrawer:     false,
  listNotifications: [],
};
