import { Link } from "react-router-dom"



const NavBar = () => {

 



  return (
    <div className="navegadorPrincipal">
     
        <Link to="/">Inicio</Link>
        <a href="www.google.com.ar">Internacionales</a>
        <a href="www.google.com.ar">Contacto</a>
        <a href="www.google.com.ar">Nosotros</a>

    </div>
  )
}

export default NavBar