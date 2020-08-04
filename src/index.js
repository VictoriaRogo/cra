import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './homework7_2/App';
import * as serviceWorker from './serviceWorker';

console.log('--ReactDOM.render start');
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
console.log('--ReactDOM.render end');

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
