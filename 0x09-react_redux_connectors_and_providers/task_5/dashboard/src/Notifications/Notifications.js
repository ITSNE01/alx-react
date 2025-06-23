import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';

import NotificationItem from './NotificationItem';
import {
  fetchNotifications,
} from '../actions/notificationActionCreators';

export class Notifications extends Component {
  componentDidMount() {
    this.props.fetchNotifications();
  }

  render() {
    const {
      displayDrawer,
      listNotifications,
      handleDisplayDrawer,
      handleHideDrawer,
      markNotificationAsRead,
    } = this.props;

    return (
      <>
        <div
          className={css(styles.menuItem)}
          onClick={handleDisplayDrawer}
        >
          Your notifications
        </div>
        {displayDrawer && (
          <div className={css(styles.drawer)}>
            <button
              aria-label="Close"
              onClick={handleHideDrawer}
              className={css(styles.closeButton)}
            >
              <img src="../assets/close-icon.png" alt="close icon" />
            </button>
            {listNotifications.length === 0 ? (
              <p className={css(styles.noNotif)}>
                No new notification for now
              </p>
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
                      markAsRead={markNotificationAsRead}
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
  },
  closeButton: {
    float: 'right',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },
  header: {
    margin: '0 0 10px 0',
    fontSize: '20px',
  },
  list: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  noNotif: {
    margin: 0,
    fontSize: '20px',
  },
});

Notifications.propTypes = {
  displayDrawer:         PropTypes.bool,
  listNotifications:     PropTypes.arrayOf(
    PropTypes.shape({
      id:    PropTypes.string.isRequired,
      type:  PropTypes.string.isRequired,
      value: PropTypes.string,
      html:  PropTypes.shape({ __html: PropTypes.string }),
    })
  ),
  handleDisplayDrawer:    PropTypes.func.isRequired,
  handleHideDrawer:       PropTypes.func.isRequired,
  markNotificationAsRead: PropTypes.func.isRequired,
  fetchNotifications:     PropTypes.func.isRequired,
};

Notifications.defaultProps = {
  displayDrawer:      false,
  listNotifications:  [],
};

const mapStateToProps = (state) => ({
  listNotifications: state.notifications
    .get('notifications')
    .valueSeq()
    .toJS(),
  displayDrawer:     state.ui.get('isNotificationDrawerVisible'),
});

export default connect(
  mapStateToProps,
  { fetchNotifications }
)(Notifications);
