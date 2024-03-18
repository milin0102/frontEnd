import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter ,Routes , Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import {balanceStore} from './app/balance.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider store={balanceStore}>
  <App />
  </Provider>
  </BrowserRouter>

)
