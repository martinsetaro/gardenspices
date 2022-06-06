import '../ItemListContainer/itemListContainer.scss'
import carro1 from '../../assets/img/carro1.jpg'
import carro2 from '../../assets/img/carro2.jpg'
import carro3 from '../../assets/img/carro3.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import InfoCompra from '../InfoCompra/InfoCompra';
import ProductosTienda from '../ProductosTienda/ProductosTienda';
import Nosotros from '../Nosotros/Nosotros';


const ItemListContainer = () => {










  return (
    <div className="listContainer">
     <Carousel className='carrousel'>
                <div className='carousel_item'>
                    <img src={carro1} />
                    <p className="legend">Experiencias de sabores</p>
                </div>
                <div className='carousel_item'>
                    <img src={carro2} />
                    <p className="legend">Unicos en el mundo</p>
                </div>
                <div className='carousel_item'>
                    <img src={carro3} />
                    <p className="legend">Perfumes y aromas que te hacen viajar</p>
                </div>
            </Carousel>
            <InfoCompra/>
            <ProductosTienda/>
           <Nosotros/>
          






    </div>
  )
}

export default ItemListContainer