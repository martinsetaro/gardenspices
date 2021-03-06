import '../ItemProductosVenta/itemVentas.scss'
import { contexto } from '../AppContext/AppContext'
import { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const ItemProductosVenta = ({nombre,imagen,precio,info,producto}) => {



  const {agregarCarrito} = useContext(contexto);
  
  const addCarrito=()=>{
    agregarCarrito(producto)
    toast.success('Producto Agregado !!!')
  } 
 



  return (
   
        <div className='box_item'>
           <img src={imagen} alt='img' title='img'/>
           <h2>{nombre}</h2>
           <h3>{info}</h3>
           <h4>Productos discontinuos</h4>
            <p>$ {precio}</p>
            <Toaster position="top-right"
  reverseOrder={true}/>
            <button onClick={addCarrito} className='btn_comprar'>Comprar</button>
           
        </div>

 
  )
}

export default ItemProductosVenta