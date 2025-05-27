import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import { getLatestNotification } from '../utils/utils';

export default class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;

    return (
      <>
        <div className={css(styles.menuItem)}>Your notifications</div>
        {displayDrawer && (
          <div className={css(styles.drawer)}>
            <button
              aria-label="Close"
              onClick={() => console.log('Close button has been clicked')}
              className={css(styles.closeButton)}
            >
              <img src="../assets/close-icon.png" alt="close icon" />
            </button>

            {listNotifications.length === 0 ? (
              <p className={css(styles.noNotif)}>No new notification for now</p>
            ) : (
              <>
                <p className={css(styles.header)}>Here is the list of notifications</p>
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

const styles = StyleSheet.create({
  menuItem: {
    position: 'fixed',
    top: 10,
    right: 10,
    fontWeight: 'bold',
    cursor: 'pointer',
    zIndex: 10,
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
    zIndex: 9,
    '@media (max-width: 900px)': {
      top:    0,
      right:  0,
      width:  '100%',
      height: '100%',
      padding: 0,
      border:  'none',
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
    }
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
    }
  },
});

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};
