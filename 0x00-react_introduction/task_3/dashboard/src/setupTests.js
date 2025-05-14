// src/setupTests.js

// Polyfill TextEncoder/TextDecoder
const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Add RTL jest-dom extensions
import '@testing-library/jest-dom';
