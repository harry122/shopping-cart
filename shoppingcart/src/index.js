import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase'

var config ={
  apiKey: "AIzaSyAmNAt5OygSnmkSKlrinVw7qJh8AQB1QpI",
    authDomain: "shopping-cart-f8a2a.firebaseapp.com",
    databaseURL: "https://shopping-cart-f8a2a.firebaseio.com",
    projectId: "shopping-cart-f8a2a",
    storageBucket: "shopping-cart-f8a2a.appspot.com",
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
