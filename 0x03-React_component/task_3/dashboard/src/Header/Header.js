import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <img src="assets/holberton-logo.jpg" className="header-logo" alt="Holberton logo" />
      <h1 className="header-title">School dashboard</h1>
    </header>
  );
}
