import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

import Form from './app/form/Form';

import './index.scss';

ReactDOM.render(
  <BrowserRouter>
      <Route exact path='/' component={Form} />
  </BrowserRouter>,
  document.getElementById('root')
);
