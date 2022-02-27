import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import theme from '@rebass/preset';
import { useTheme, ThemeProvider, withTheme } from '@emotion/react';
import './style/common.css'
import Router from './router'

ReactDOM.render(
    <Router />,
    // <ThemeProvider theme={theme}>
    //   <Router />
    // </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
