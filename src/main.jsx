import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Mision from './components/vandm'
import Experience from './components/experience'
import Images from './components/images'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Hero/>
    <Mision/>
    <Experience/>
    <Images />
  </React.StrictMode>,
)
