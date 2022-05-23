import '../ProductosTienda/productosTienda.scss'
import promo from '../../assets/img/promo.jpg'
import aderezos from '../../assets/img/aderezos.jpg'
import foodies from '../../assets/img/foodies.jpg'

const ProductosTienda = () => {
  return (
    <div className='productosTienda'>
                      <div className='boxes producto1'>
                               <img src={promo} alt="promo" title='promo'/>
                    <div className='boxes_info'>
                              <h2>Promos</h2>
                              <p>Consegui las mejores promociones</p>
                             <button className='btn_tienda'>Comprá</button>
                 </div>
                </div>

                  <div className='boxes producto2'>
                            <img src={aderezos} alt="promo" title='promo'/>
                      <div className='boxes_info'>
                         <h2>Salsas y aderezos</h2>
                            <p>Dale un sabor especial a tus comidas</p>
                           <button className='btn_tienda'>Comprá</button>
                      </div>
                      </div>
        <div className='boxes producto3'>
        <img src={foodies} alt="promo" title='promo'/>
        <div className='boxes_info'>
                   <h2>Foodies</h2>
                  <p>Come siempre rico y siempre sano!!</p>
                 <button className='btn_tienda'>Comprá</button>
        </div>
        </div>

    </div>
  )
}

export default ProductosTienda