// @ts-ignore
import React from 'react'
// @ts-ignore
import ReactDOM from 'react-dom/client'
import './index.css'
// @ts-ignore
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)