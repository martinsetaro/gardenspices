import { useContext } from 'react'
import { contexto } from '../AppContext/AppContext';
import '../Cart/cart.scss'

const CartItem = ({contenido}) => {

    const {removeItem} = useContext(contexto);
    const {precio,cantidad} = contenido;
    
    console.log(cantidad)


   const borrarItem = ()=>{
    removeItem(contenido.id);
    
   
   }
  
   let total = cantidad * precio;
   



   
  return (
              <tr className="itemContenido">
                  <td><img src={contenido.imagen} alt="img" title="img"/></td>
                  <td>{contenido.nombre}</td>
                  <td>$ {precio}</td>
                  <td>{contenido.cantidad}</td>
                  <td>${total}</td>
                  <td><button className='btn_delete' onClick={borrarItem}>X</button></td>
              </tr>
  )
}

export default CartItem