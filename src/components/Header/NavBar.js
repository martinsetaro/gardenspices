import { Link } from "react-router-dom"
import { contexto } from '../AppContext/AppContext'
import { useContext } from "react"


const NavBar = () => {

  const {carrito} = useContext(contexto);



  return (
    <div className="navegadorPrincipal">
      <span className="material-symbols-outlined">
shopping_cart
</span>
{carrito.length == 0 ? <span className="contador_productos" style={{backgroundColor:'white'}}></span> : 

<span className="contador_productos">{carrito.length}</span>}
        <Link to="/">Inicio</Link>
        <a href="www.google.com.ar">Internacionales</a>
        <a href="www.google.com.ar">Contacto</a>
        <a href="www.google.com.ar">Nosotros</a>

    </div>
  )
}

export default NavBar