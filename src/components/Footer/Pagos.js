import '../Footer/footer.scss'
import mediosDePago from '../../assets/img/mediosdepago.jpg'


const Pagos = () => {
  return (
    <div className="box_footer">
      <h2>Medios de Pago</h2>
<img src={mediosDePago} alt='imge' title='imge'/>
    </div>
  )
}

export default Pagos