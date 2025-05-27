import React from 'react';
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
});

export default function Header() {
  return (
    <header className={css(styles.header)}>
      <img
        src="assets/holberton-logo.jpg"
        className={css(styles.logo)}
        alt="Holberton logo"
      />
      <h1 className={css(styles.title)}>School dashboard</h1>
    </header>
  );
}
