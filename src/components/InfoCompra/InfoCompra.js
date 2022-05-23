import '../InfoCompra/infoCompra.scss'

const InfoCompra = () => {
  return (
    <div className='info'>
        <div className='box uno'>
        <span className="material-symbols-outlined">
local_shipping
</span>
<p>Envio gratis a partir de los $6000</p>
        </div>
        <div className='box'>
        <span className="material-symbols-outlined">
payments
</span>
<p>Paga como quieras, tarjeta de credito,debito o transferencia bancaria.</p>
        </div>
        <div className='box tres'>
        <span className="material-symbols-outlined">
lock
</span>
<p>Tus datos siempre protegidos</p>
        </div>
    </div>
  )
}

export default InfoCompra