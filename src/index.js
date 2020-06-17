import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
const firebase=require('firebase')
const firebaseConfig={
  apiKey: "AIzaSyC45t6uhcW0wFr82PrC9qXaISubasSWJag",
  authDomain: "chat-6a3e7.firebaseapp.com",
  databaseURL: "https://chat-6a3e7.firebaseio.com",
  projectId: "chat-6a3e7",
  storageBucket: "chat-6a3e7.appspot.com",
  messagingSenderId: "850390706140",
  appId: "1:850390706140:web:cf829e1d4d4eefcfd2d119",
  measurementId: "G-NELHPRMTV7"
};
firebase.initializeApp(firebaseConfig);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
