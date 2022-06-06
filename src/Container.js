import { Routes,Route } from "react-router-dom"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import Nosotros from "./components/Nosotros/Nosotros"
import Cart from "./components/Cart/Cart"
import Promo from "./components/Promo/Promo"
import Veggie from '../src/components/Veggie/Veggie'
import Basic from "./components/FormularioPago/FormularioPago"
import ProductosVenta from "./components/ProductosVenta/ProductosVenta"


const Container = () => {
  return (
      <main className="main">
          <Routes>
              <Route path="/" element={<ItemListContainer/>}></Route>
              <Route path="/nosotros" element={<Nosotros/>}></Route>
              <Route path= "/carrito" element={<Cart/>}></Route>
              <Route path="/promo" element={<Promo/>}/>
              <Route path="/veggie" element={<Veggie/>}/>
              <Route path="/formulario_pago" element={<Basic/>}/>
              <Route path="/internacionales" element={<ProductosVenta/>}/>
          </Routes>

      </main>
  )
}

export default Container