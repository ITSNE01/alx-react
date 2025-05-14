// src/App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  it('renders without crashing', () => {
    render(<App />);
  });

  it('renders a div with the class App-header', () => {
    render(<App />);
    expect(screen.getByRole('banner')).toHaveClass('App-header');
  });

  it('renders a div with the class App-body', () => {
    render(<App />);
    expect(screen.getByRole('main')).toHaveClass('App-body');
  });

  it('renders a div with the class App-footer', () => {
    render(<App />);
    expect(screen.getByRole('contentinfo')).toHaveClass('App-footer');
  });
});
