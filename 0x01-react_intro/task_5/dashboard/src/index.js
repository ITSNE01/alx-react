import React from 'react';
import { createRoot } from 'react-dom/client';
import Notifications from './Notifications/Notifications';
import App from './App/App';

const notifContainer = document.getElementById('root-notifications');
if (notifContainer) {
  createRoot(notifContainer).render(<Notifications />);
}

const appContainer = document.getElementById('root');
if (appContainer) {
  createRoot(appContainer).render(<App />);
}
