import React from 'react'
import ReactDOM from 'react-dom/client'
import { DrinkApp } from './assets/DrinkApp'
import "./reset.min.css"


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DrinkApp/>
  </React.StrictMode>,
)
