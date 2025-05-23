// src/Notifications.js
import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';

import { getLatestNotification } from './utils';

export default function Notifications() {
  const handleClose = () => {
    console.log('Close button has been clicked');
  };

  return (
    <div className="Notifications">
      <button
        aria-label="Close"
        onClick={handleClose}
        style={{ float: 'right', background: 'transparent', border: 'none', cursor: 'pointer' }}
      >
        <img src={closeIcon} alt="close icon" />
      </button>

      <p>Here is the list of notifications</p>

      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          data-priority="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li>
      </ul>
    </div>
  );
}
