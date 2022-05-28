import '../ProductosVenta/productosVenta.scss'
import Productos from '../../mock/Productos'
import ItemProductosVenta from '../ItemProductosVenta/ItemProductosVenta'


const ProductosVenta = () => {








  return (
      <div className='item_ofertas'>
    {Productos.map(producto=>(
      <ItemProductosVenta key={producto.id} nombre={producto.nombre} imagen={producto.imagen} precio={producto.precio} info={producto.info} producto={producto}/>
    ))}
      
      
      </div>
    
  )
}

export default ProductosVenta