import { Link } from "react-router-dom"



const NavBar = () => {

 



  return (
    <div className="navegadorPrincipal">
     
        <Link to="/">Inicio</Link>
        <Link to="/internacionales">Discontinuos</Link>
        <a href="www.google.com.ar">Contacto</a>
        

    </div>
  )
}

export default NavBar