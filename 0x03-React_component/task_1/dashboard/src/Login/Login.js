import React, { Fragment } from 'react';
import './Login.css';

export default function Login() {
  return (
    <Fragment>
      <div className="login-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />
      </div>
      <div className="login-group">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" />
      </div>
      <button className="login-button">OK</button>
    </Fragment>
  );
}
