import React from 'react';
import ReactDom from 'react-dom'
import './index.css';
import App from './App.js'
import {StateProvider} from '../src/store.js'




ReactDom.render(
  <React.StrictMode>
    <StateProvider>
        <App />
    </StateProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
)