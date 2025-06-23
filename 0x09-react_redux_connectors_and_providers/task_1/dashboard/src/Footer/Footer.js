import React from 'react';
import AppContext from '../App/AppContext';

export default function Footer() {
  return (
    <AppContext.Consumer>
      {({ user }) => (
        <footer className="footer">
          <p>Copyright 2020 - Holberton School</p>
          {/* Show “Contact us” link only if user.isLoggedIn */}
          {user.isLoggedIn && (
            <p>
              <a href="#contact">Contact us</a>
            </p>
          )}
        </footer>
      )}
    </AppContext.Consumer>
  );
}
