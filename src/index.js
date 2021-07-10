import React from 'react';
import ReactDom from 'react-dom'
import './index.css';
import App from './App.js'
import {StateProvider} from '../src/store.js'
import {BrowserRouter} from 'react-router-dom'


ReactDom.render(
  <React.StrictMode>
    <BrowserRouter>
      <StateProvider>
        <App />
      </StateProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)