import { useContext } from 'react';
import { contexto } from '../AppContext/AppContext';
import CartItem from '../CartItem/CartItem';
import '../Cart/cart.scss'

const Cart = () => {

    const {carrito} = useContext(contexto);
    


  return (
    <div className="tabla">
        <table className='tablaItem'>
          <thead>
              <tr>
                  <th>Imagen</th>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Total</th>
                  <th>Eliminar</th>
              </tr>
          </thead>
          {carrito.length === 0 && (<div className='titulo_carritoVacio'><h2>Carrito Vacio</h2></div>)}  
          <tbody className='tbody'>
       {carrito.map( carro =>
                  <CartItem key={carro.id} contenido={carro}/>  )}
       </tbody>
       
       </table>
    </div>
  )
}

export default Cart