import React from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import './Notifications.css';

export default function Notifications({ displayDrawer, listNotifications }) {
  return (
    <>
      <div className="menuItem">Your notifications</div>
      {displayDrawer && (
        <div className="Notifications">
          <button
            aria-label="Close"
            onClick={() => console.log('Close button has been clicked')}
            style={{ float: 'right', background: 'transparent', border: 'none' }}
          >
            <img src="../assets/close-icon.png" alt="close icon" />
          </button>
          {listNotifications.length === 0 ? (
            <p>No new notification for now</p>
          ) : (
            <>
              <p>Here is the list of notifications</p>
              <ul>
                {listNotifications.map(({ id, type, value, html }) => (
                  <NotificationItem
                    key={id}
                    type={type}
                    value={value}
                    html={html}
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

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};
