import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import Elias from './Elias';
import Home from './Home';
import LZW from './LZW';
import React from 'react';
import ReactDOM from 'react-dom';

export const PATHS = ['LZW'];

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path={`/${PATHS[0]}`} component={LZW} />
      {/* <Route exact path={`/${PATHS[1]}`} component={Elias} /> */}
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
