import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Notifications from './Notifications';
import reportWebVitals from './reportWebVitals';

// Mount the main App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Mount the Notifications component in its own div
const notifRoot = ReactDOM.createRoot(
  document.getElementById('root-notifications')
);
notifRoot.render(
  <React.StrictMode>
    <Notifications />
  </React.StrictMode>
);

// Performance measuring (optional)
reportWebVitals();
