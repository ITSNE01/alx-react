import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Footer({ user }) {
  return (
    <footer className="footer">
      <p>Copyright 2020 - Holberton School</p>
      {user.isLoggedIn && (
        <p>
          <a href="#contact">Contact us</a>
        </p>
      )}
    </footer>
  );
}

Footer.propTypes = {
  user: PropTypes.shape({
    isLoggedIn: PropTypes.bool,
  }),
};

Footer.defaultProps = {
  user: {
    isLoggedIn: false,
  },
};

const mapStateToProps = (state) => ({
  user: state.uiReducer.user,
});

export default connect(mapStateToProps)(Footer);

