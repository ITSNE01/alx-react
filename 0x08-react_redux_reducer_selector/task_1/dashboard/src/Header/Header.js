import React, { Component } from 'react';
import AppContext from '../App/AppContext';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottom: '3px solid #e11d3f',
    padding: '20px',
  },
  logo: {
    height: '80px',
    marginRight: '20px',
  },
  title: {
    fontSize: '2rem',
    color: '#333',
  },
  logoutSection: {
    marginTop: '10px',
    textAlign: 'right',
    paddingRight: '20px',
    fontStyle: 'italic',
  },
  logoutLink: {
    marginLeft: '5px',
    color: 'blue',
    cursor: 'pointer',
  },
});

export default class Header extends Component {
  static contextType = AppContext;

  render() {
    const { user, logOut } = this.context;
    return (
      <div>
        <header className={css(styles.header)}>
          <img
            src="assets/holberton-logo.jpg"
            className={css(styles.logo)}
            alt="Holberton logo"
          />
          <h1 className={css(styles.title)}>School dashboard</h1>
        </header>
        {/* Show logoutSection only if user.isLoggedIn */}
        {user.isLoggedIn && (
          <div id="logoutSection" className={css(styles.logoutSection)}>
            Welcome {user.email}
            <span
              onClick={logOut}
              className={css(styles.logoutLink)}
            >
              (logout)
            </span>
          </div>
        )}
      </div>
    );
  }
}
