// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Optional: CSS file for global styles
import App from './App';  // Import App from the same src folder

// Rendering the App component into the root element in index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // The div with id="root" in index.html
);
