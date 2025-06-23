import React from 'react';
import { createRoot } from 'react-dom/client';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import uiReducer from './reducers/uiReducer';
import App from './App/App';

const rootReducer = combineReducers({ uiReducer });
const store = createStore(rootReducer, applyMiddleware(thunk));

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
