import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App/App';

console.log('📦 index.js loaded');

const container = document.getElementById('root');
if (!container) {
  throw new Error('No #root element found in index.html');
}
createRoot(container).render(<App />);
