import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import Nosotros from "./components/Nosotros/Nosotros"
import Cart from "./components/Cart/Cart"
import Promo from "./components/Promo/Promo"
import Basic from "./components/FormularioPago/FormularioPago"
import ProductosVenta from "./components/ProductosVenta/ProductosVenta"

const Main = () => {
  return (
    <>
            <ItemListContainer/>
            <Nosotros/>
            <Cart/>
            <Promo/>
            <Basic/>
            <ProductosVenta/>
    </>
  )
}

export default Main
