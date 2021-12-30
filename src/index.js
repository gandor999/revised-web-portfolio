import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import {
  clouds,
  eCommerceAPI,
  eCommerceReact,
  TicTacToe,
  night
} from './images/images.js'



const preload = {
  clouds: clouds,
  eCommerceAPI: eCommerceAPI,
  eCommerceReact: eCommerceReact,
  TicTacToe: TicTacToe,
  night: night
}

ReactDOM.render(
  <BrowserRouter>
    <App preload={preload} />
  </BrowserRouter>,
  document.getElementById('root')
);

