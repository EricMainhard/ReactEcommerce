import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header';
import ProductsContainer from './Components/ProductsContainer/ProductsContainer';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Footer/Footer';
import { Routes,Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<ProductsContainer/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
