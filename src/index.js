import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import './styles/styles.css'; //Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import routes from './routes'

ReactDOM.render(
  <Router history = {browserHistory} routes = {routes} />,
  document.getElementById('app')
);
