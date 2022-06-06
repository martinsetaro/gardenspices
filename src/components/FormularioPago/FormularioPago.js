import '../FormularioPago/formularioPago.scss'
import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { contexto } from '../AppContext/AppContext';
import ItemFormularioPago from './ItemFormularioPago';
import logo from '../../assets/img/logo.png'
import swal from 'sweetalert';



const Basic = ()=> {

    const {carrito,vaciarCarrito} = useContext(contexto);
    const [total,setTotal] = useState(0);




   useEffect(()=>{
    let sumaFinal=0;
    carrito.forEach(carro => {
  let sumaTotal = carro.precio * carro.cantidad;
          sumaFinal += sumaTotal;
          
    })
          setTotal(sumaFinal)  
  },[carrito]);

  

  const redireccion = ()=>{
    setTimeout(()=>{
      swal({
        title: "Gracias por tu compra!!",
  text: "Presiona el boton para continuar!",
  icon: "success",
  button:"Continuar"
    }).then(function() {
      window.location = "/";
      
    })
    vaciarCarrito();
   
   
  
    },3000)
  }


  



  return (
    <div className='formulario_pago'>
      <img src={logo} alt="img" title='img'/>
      <h2>Pedido de Compra</h2>
        <h2>Productos Comprados = {carrito.length}</h2>
        
        {carrito.map( cart => 
            <ItemFormularioPago key={cart.id} carro={cart} />)}
       <div className='botones_pagar'>
       <h3>Resta pagár un total de : <span>${total} Ars</span></h3>
       <a onClick ={redireccion} href="https://link.mercadopago.com.ar/gardenspicesmp" target="_blank" rel="nofollow noopener noreferrer">Pagár</a>
</div>
    </div>
  );
}

export default Basic;