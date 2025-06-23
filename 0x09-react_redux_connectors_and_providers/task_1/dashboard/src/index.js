import React from 'react';
import { createRoot } from 'react-dom/client';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import uiReducer from './reducers/uiReducer';
import App from './App/App';

const store = createStore(combineReducers({ uiReducer }));

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
