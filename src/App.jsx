import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/home/HomePage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import VolunteerPage from './components/volunteer/VolunteerPage'
import About from './components/home/About'
import AboutPage from './components/about/AboutPage'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/volunteer' element={<VolunteerPage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
