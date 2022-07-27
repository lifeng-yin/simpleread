import React from 'react'

//import bootstrap icons
import "bootstrap-icons/font/bootstrap-icons.css";

//import react router
import { Route, Routes } from 'react-router-dom'

import About from './pages/About.js'
import Home from './pages/Home.js'
import Navbar from './Navbar.js'

const App = () => {

  return (
    <>
    <Navbar/>

    <Routes>
      <Route path = '/' element = {<Home/>}/>
      <Route path = '/about' element = {<About/>}/>
    </Routes>
    
    </>
  )
}

export default App