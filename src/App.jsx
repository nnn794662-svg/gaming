import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Portfolio from './Pages/PortfolioPage'
import About from './Pages/AboutPage'
import News from './Pages/NewsPage'
import Home from './Pages/HomePage'
import  {Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <>
     <Header/>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about us" element={<About />} />
      <Route path="/Portfolio" element={<Portfolio />} />
      <Route path="/News" element={<News />} />
     </Routes>
     <Footer/>
    </>
  )
}
