import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import './index.css'
import App from './App'
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
