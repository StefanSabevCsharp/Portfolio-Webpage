import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../public/css/custom.css';
import '../public/css/tailwind.css';
import { BrowserRouter } from 'react-router';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
)
