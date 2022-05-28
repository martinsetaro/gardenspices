import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from '../src/components/Header/Header'
import Container from './Container'
import Footer from '../src/components/Footer/Footer'
import AppContext from './components/AppContext/AppContext'


const App = () => {
  return (
    <BrowserRouter>
    <AppContext>                        
    <Header/>
    <Container/>
    <Footer/>
    </AppContext>     
    </BrowserRouter>
  )
}

export default App