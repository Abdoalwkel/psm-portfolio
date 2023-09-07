import React from 'react'
import About from './About/About'
import Header from './Header/Header'
import Skills from './Skills/Skills'
import Work from './Work/Work'
import Navbar from './components/Navbar/Navbar'
import Footer from './Footer/Footer'
import './App.scss';
import { Container , Row , Col } from 'react-bootstrap'




const App = () => {
  return (
    <div className="app">
            <Navbar />
            <Header />
            <About />
            <Work />
            <Skills />
            <Footer />
  </div>
  )
}

export default App
