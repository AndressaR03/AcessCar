import React from 'react';
import ReactDOM from 'react-dom';
import Login from '../Home/home';
import './firebase/config';
import 'bulma/css/bulma.min.css';

ReactDOM.render(
  <React.StrictMode>
      <Login />
  </React.StrictMode>,
  document.getElementById('root')
);