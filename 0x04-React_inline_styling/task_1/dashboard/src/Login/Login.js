import React, { Fragment } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  group: {
    display: 'inline-block',
    marginRight: '20px',
    verticalAlign: 'middle',
  },
  button: {
    padding: '6px 12px',
    cursor: 'pointer',
    verticalAlign: 'middle',
  },
});

export default function Login() {
  return (
    <Fragment>
      <div className={css(styles.group)}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />
      </div>
      <div className={css(styles.group)}>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" />
      </div>
      <button className={css(styles.button)}>OK</button>
    </Fragment>
  );
}
