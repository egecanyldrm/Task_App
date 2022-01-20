import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import AppRouter from './Routers/AppRouter';
import './Styles/main.scss';
import configureStore from './Store/configureStore'
import { Provider } from 'react-redux'
import "bootstrap"; 


const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
  ,
  document.getElementById('root')
);
reportWebVitals();
