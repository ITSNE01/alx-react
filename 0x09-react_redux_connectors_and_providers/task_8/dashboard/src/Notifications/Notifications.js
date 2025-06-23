import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';

import NotificationItem from './NotificationItem';
import {
  fetchNotifications,
  markAsAread,
  setNotificationFilter,
} from '../actions/notificationActionCreators';
import { getUnreadNotificationsByType } from '../selectors/notificationSelector';

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
      markAsAread,
      setNotificationFilter,
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
                <div className={css(styles.filterButtons)}>
                  <button
                    onClick={() => setNotificationFilter('URGENT')}
                    className={css(styles.filterBtn)}
                  >
                    ‼️
                  </button>
                  <button
                    onClick={() => setNotificationFilter('DEFAULT')}
                    className={css(styles.filterBtn)}
                  >
                    💠
                  </button>
                </div>
                <ul className={css(styles.list)}>
                  {listNotifications.map(({ id, type, value, html }) => (
                    <NotificationItem
                      key={id}
                      id={id}
                      type={type}
                      value={value}
                      html={html}
                      markAsRead={markAsAread}
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
  filterButtons: {
    marginBottom: 10,
  },
  filterBtn: {
    marginRight: 8,
    cursor: 'pointer',
    background: 'transparent',
    border: 'none',
    fontSize: '1.2rem',
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
  displayDrawer:      PropTypes.bool.isRequired,
  listNotifications:  PropTypes.arrayOf(
    PropTypes.shape({
      id:    PropTypes.string.isRequired,
      type:  PropTypes.string.isRequired,
      value: PropTypes.string,
      html:  PropTypes.shape({ __html: PropTypes.string }),
    })
  ).isRequired,
  handleDisplayDrawer: PropTypes.func.isRequired,
  handleHideDrawer:    PropTypes.func.isRequired,
  fetchNotifications:  PropTypes.func.isRequired,
  markAsAread:         PropTypes.func.isRequired,
  setNotificationFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  listNotifications: getUnreadNotificationsByType(state)
    .valueSeq()
    .toJS(),
  displayDrawer:     state.ui.get('isNotificationDrawerVisible'),
});

export default connect(
  mapStateToProps,
  { fetchNotifications, markAsAread, setNotificationFilter }
)(Notifications);
