import React from 'react';
import './App.css';
import { getFullYear, getFooterCopy } from '../utils/utils';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>School dashboard</h1>
      </header>
      <main className="App-body">
        <p>Login to access the full dashboard</p>
      </main>
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </div>
  );
}
