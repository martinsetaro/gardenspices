import '../Veggie/veggie.scss'
import Vegano from '../../mock/Vegano'
import ItemVeggie from '../ItemVeggie/ItemVeggie'


const Veggie = () => {





  return (
    <div className='veggie'>
     {Vegano.map( vegano => 
        <ItemVeggie key={vegano.id} vegano={vegano}/>)}

    </div>
  )
}

export default Veggie