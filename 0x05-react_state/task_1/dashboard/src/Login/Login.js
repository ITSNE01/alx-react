import React, { Component, Fragment } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  formGroup: {
    marginBottom: '10px',
  },
  inputField: {
    marginLeft: '10px',
  },
  submitButton: {
    padding: '6px 12px',
    cursor: 'pointer',
    ':disabled': {
      cursor: 'not-allowed',
      opacity: 0.5,
    },
  },
});

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLoggedIn: false,
      enableSubmit: false,
    };
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }

  handleChangeEmail(e) {
    const email = e.target.value;
    this.setState((prev) => {
      const enableSubmit = email.trim() !== '' && prev.password.trim() !== '';
      return { email, enableSubmit };
    });
  }

  handleChangePassword(e) {
    const password = e.target.value;
    this.setState((prev) => {
      const enableSubmit = prev.email.trim() !== '' && password.trim() !== '';
      return { password, enableSubmit };
    });
  }

  handleLoginSubmit(e) {
    e.preventDefault();
    this.setState({ isLoggedIn: true });
  }

  render() {
    const { email, password, enableSubmit } = this.state;
    return (
      <Fragment>
        <form onSubmit={this.handleLoginSubmit}>
          <div className={css(styles.formGroup)}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={this.handleChangeEmail}
              className={css(styles.inputField)}
            />
          </div>
          <div className={css(styles.formGroup)}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={this.handleChangePassword}
              className={css(styles.inputField)}
            />
          </div>
          <input
            type="submit"
            value="OK"
            disabled={!enableSubmit}
            className={css(styles.submitButton)}
          />
        </form>
      </Fragment>
    );
  }
}
