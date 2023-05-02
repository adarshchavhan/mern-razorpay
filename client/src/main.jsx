import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/main.scss'
import {Provider} from 'react-redux'
import axios from 'axios'
import { store } from './redux/store.js'

axios.defaults.baseURL = "http://localhost:4000/api";
axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
