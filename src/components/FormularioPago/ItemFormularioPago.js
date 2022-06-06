import '../FormularioPago/formularioPago.scss'

const ItemFormularioPago = ({carro,total}) => {

console.log(carro)


  return (
    <div className="item_formulario">
        <h2> ° {carro.info}______x {carro.cantidad}</h2>
   </div>
  )
}

export default ItemFormularioPago