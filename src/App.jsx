import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Logo from './assets/Logo.png'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import Products from './Pages/Products/Products'
import SketchToImage from './Components/SketchToImage/SketchToImage'
import RemoveBackgroundFromImage from './Components/RemoveBackgroundFromImage/RemoveBackgroundFromImage'
import ChatBot from './Components/ChatBot/ChatBot'

const App = () => {
  return (
    <div className='app'>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />}>
            <Route path='SketchToImage' element={<SketchToImage />} />
            <Route path='RemoveBackgroundFromImage' element={<RemoveBackgroundFromImage />} />
            <Route path='ChatBot' element={<ChatBot />} />
          </Route>
        </Routes>
      <Footer />
    </div>
  )
}

export default App