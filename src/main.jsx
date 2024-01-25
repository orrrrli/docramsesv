import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './navbar'
import Hero from './hero'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Hero/>
  </React.StrictMode>,
)
