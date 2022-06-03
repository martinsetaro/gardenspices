import '../ProductosTienda/productosTienda.scss'
import promo from '../../assets/img/promo.jpg'
import aderezos from '../../assets/img/aderezos.jpg'
import foodies from '../../assets/img/foodies.jpg'
import {Link} from 'react-router-dom'


const ProductosTienda = () => {
  return (
    <div className='productosTienda'>
                      <div className='boxes producto1'>
                               <img src={promo} alt="promo" title='promo'/>
                                 <Link to="/nosotros">Promo</Link>
                              
                             <button className='btn_tienda'>Comprá</button>
                
                </div>

                  <div className='boxes producto2'>
                            <img src={aderezos} alt="promo" title='promo'/>
                      
                         <Link to="/productos">Salsas y aderezos</Link>
                           
                           <button className='btn_tienda'>Comprá</button>
                      
                      </div>
        <div className='boxes producto3'>
        <img src={foodies} alt="promo" title='promo'/>
        
                   <Link to="/productos">Foodies</Link>
                 
                 <button className='btn_tienda'>Comprá</button>
        
        </div>

    </div>
  )
}

export default ProductosTienda