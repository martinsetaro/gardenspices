import React from 'react'
import logo from '../../assets/img/logo.png'

import '../Header/header.scss'
import NavBar from '../Header/NavBar'


const Header = () => {
  return (
    <div className='header'>
<img src={logo}  alt="garden spices" title='garden spices'/>
   <NavBar/>
    </div>
  )
}

export default Header