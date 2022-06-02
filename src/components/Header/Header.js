import React from 'react'
import logo from '../../assets/img/logo.png'
import { contexto } from '../AppContext/AppContext'
import { useContext } from "react"
import { Link } from "react-router-dom"



import '../Header/header.scss'
import NavBar from '../Header/NavBar'


const Header = () => {

  const {carrito} = useContext(contexto);


  return (
    <div className='header'>
<img src={logo}  alt="garden spices" title='garden spices'/>

<Link to="/carrito"><span className="material-symbols-outlined counter">
shopping_cart
</span></Link>
{carrito.length == 0 ? <span className="contador_productos" style={{backgroundColor:'white'}}></span> : 

<span className="contador_productos">{carrito.length}</span>}
   <NavBar/>
    </div>
  )
}

export default Header