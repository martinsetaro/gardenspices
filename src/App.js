import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from '../src/components/Header/Header'
import Container from './Container'
import Footer from '../src/components/Footer/Footer'


const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Container/>
    <Footer/>
    </BrowserRouter>
  )
}

export default App