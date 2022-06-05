import { useContext, useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { contexto } from '../AppContext/AppContext';
import CartItem from '../CartItem/CartItem';
import '../Cart/cart.scss'

const Cart = () => {

    const {carrito,vaciarCarrito} = useContext(contexto);
    const [total,setTotal] = useState(0);




   useEffect(()=>{
    let sumaFinal=0;
    carrito.forEach(carro => {
  let sumaTotal = carro.precio * carro.cantidad;
          sumaFinal += sumaTotal;
          
    })
          setTotal(sumaFinal)  
  },[carrito]);
    

    


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
       <div className='botones_carrito'>
         <button className='btn_accion vaciarCarrito' onClick={()=>{vaciarCarrito()}}>Vaciar Carrito</button>
         <Link to="/"><button className='btn_accion volverComprar'>Volver a comprar</button></Link>
         <Link to="/formulario_pago"><button className='btn_accion finalizarCompra'>Finalizar Compra</button></Link>
         <h2>Total:$ {total} </h2>
       </div>
    </div>
  )
}

export default Cart