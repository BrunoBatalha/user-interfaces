import React from 'react';
import ReactDOM from 'react-dom';

import One from './pages/1_';
import Two from './pages/2_';
import Three from './pages/3_';

import './css/global.css';

ReactDOM.render(
  <React.StrictMode>
    <Three />
  </React.StrictMode>,
  document.getElementById('root'),
);
