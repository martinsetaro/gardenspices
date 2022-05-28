import '../ItemProductosVenta/itemVentas.scss'
import { contexto } from '../AppContext/AppContext'
import { useContext } from 'react';

const ItemProductosVenta = ({nombre,imagen,precio,info,producto}) => {



  const {agregarCarrito} = useContext(contexto);
  
  const addCarrito=()=>{
    agregarCarrito(producto)
  } 
 



  return (
   
        <div className='box_item'>
           <img src={imagen} alt='img' title='img'/>
           <h2>{nombre}</h2>
           <h3>{info}</h3>
           <h4>Descuento de 50% en la segunda compra</h4>
            <p>$ {precio}</p>
            <button onClick={addCarrito} className='btn_comprar'>Comprar</button>
           
        </div>

 
  )
}

export default ItemProductosVenta