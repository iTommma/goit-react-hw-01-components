
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

// // Створення реакт елемента title
// const title = React.createElement('hi', {}, 'hello world');

ReactDOM.createRoot(document.getElementById('root')).render(
  // title
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
