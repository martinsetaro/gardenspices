import { useContext } from 'react'
import { contexto } from '../AppContext/AppContext'
import toast, { Toaster } from 'react-hot-toast';
import '../Veggie/veggie.scss'

const ItemVeggie = ({vegano}) => {

    const {agregarCarrito} = useContext(contexto);


const addCarrito = ()=>{
  agregarCarrito(vegano);
  toast.success('Producto Agregado !!!')
}





  return (
    <div className="itemveggie">
<h2>{vegano.nombre}</h2>
        <img src={vegano.imagen} alt='img' title='img'/>
        <h3>{vegano.info}</h3>
        <p>$ {vegano.precio}</p>
        <Toaster/>
        <button className='btn_comprar' onClick={addCarrito}>Comprar</button>

    </div>
  )
}

export default ItemVeggie