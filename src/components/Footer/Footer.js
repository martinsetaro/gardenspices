import '../Footer/footer.scss'
import Contactos from './Contactos'
import Navegacion from './Navegacion'
import Pagos from './Pagos'

const Footer = () => {
  return (

    <div className="footer">
      <Navegacion/>
      <Pagos/>
      <Contactos/>

    </div>
  )
}

export default Footer