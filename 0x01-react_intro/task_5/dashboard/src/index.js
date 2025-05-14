import './style.css';
import logo from './logo.jpg';

const root = document.getElementById('root');
const heading = document.createElement('h1');
heading.textContent = 'Welcome to your Dashboard!';
root.appendChild(heading);

const img = document.createElement('img');
img.src = logo;
img.alt = 'Logo';
img.style.width = '200px';
root.appendChild(img);
