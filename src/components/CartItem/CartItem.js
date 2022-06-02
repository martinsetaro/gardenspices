import { useContext } from 'react'
import { contexto } from '../AppContext/AppContext';
import '../Cart/cart.scss'

const CartItem = ({contenido}) => {

    const {removeItem} = useContext(contexto);

    const {precio,cantidad} = contenido;

    let precioTotal = precio * cantidad;

   



  return (
              <tr className="itemContenido">
                  <td><img src={contenido.imagen} alt="img" title="img"/></td>
                  <td>{contenido.nombre}</td>
                  <td>$ {contenido.precio}</td>
                  <td>{contenido.cantidad}</td>
                  <td>$ {precioTotal}</td>
                  <td><button className='btn_delete' onClick={()=>{removeItem(contenido.id)}}>X</button></td>
              </tr>
  )
}

export default CartItem