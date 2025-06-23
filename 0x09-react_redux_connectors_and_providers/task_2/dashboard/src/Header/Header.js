import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';
import { logout } from '../actions/uiActionCreators';

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

function Header({ user, logout }) {
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
      {user.isLoggedIn && (
        <div id="logoutSection" className={css(styles.logoutSection)}>
          Welcome {user.email}
          <span onClick={logout} className={css(styles.logoutLink)}>
            (logout)
          </span>
        </div>
      )}
    </div>
  );
}

Header.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
    isLoggedIn: PropTypes.bool,
  }).isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.uiReducer.user,
});

export default connect(mapStateToProps, { logout })(Header);
