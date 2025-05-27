import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <p className="footer-text">
      Copyright {new Date().getFullYear()} – School dashboard
    </p>
  );
}
