import '../Promo/promo.scss';
import ItemPromo from '../ItemPromo/ItemPromo'
import Promociones from '../../mock/Promociones';



const Promo = () => {

   



  return (
    <div className='contenedor_promociones'>
        {Promociones.map( promo =>
            <ItemPromo key={promo.id} promo={promo}/>
         )}

       

    </div>
  )
}

export default Promo