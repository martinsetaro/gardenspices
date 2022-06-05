import '../Promo/promo.scss'
import { useContext } from 'react'
import { contexto } from '../AppContext/AppContext'
import toast, { Toaster } from 'react-hot-toast';



const ItemPromo = ({promo}) => {

  const {agregarCarrito} = useContext(contexto);


const addCarrito = ()=>{
  agregarCarrito(promo);
  toast.success('Producto Agregado !!!')
}


  return (
    <div className='itemPromociones'>
        <h2>{promo.nombre}</h2>
        <img src={promo.imagen} alt='img' title='img'/>
        <h3>{promo.info}</h3>
        <p>$ {promo.precio}</p>
        <Toaster/>
        <button className='btn_comprar' onClick={addCarrito}>Comprar</button>



    </div>
  )
}

export default ItemPromo