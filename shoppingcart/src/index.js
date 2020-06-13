import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase'

var config ={
  apiKey: "AIzaSyBT3yXo7cxcH8mgem1DtYw7QTXubIkg0to",
  authDomain: "shopping-cart-f503a.firebaseapp.com",
  databaseURL: "https://shopping-cart-f503a.firebaseio.com",
  projectId: "shopping-cart-f503a",
  storageBucket: "shopping-cart-f503a.appspot.com",
  messagingSenderId: "131549464462",
  appId: "1:131549464462:web:2a4be04fb0ab1ecc7e46df",
};

firebase.initializeApp(config);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
