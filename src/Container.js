import { Routes,Route } from "react-router-dom"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import Nosotros from "./components/Nosotros/Nosotros"
import Cart from "./components/Cart/Cart"


const Container = () => {
  return (
      <main className="main">
          <Routes>
              <Route path="/" element={<ItemListContainer/>}></Route>
              <Route path="/nosotros" element={<Nosotros/>}></Route>
              <Route path= "/carrito" element={<Cart/>}></Route>
          </Routes>

      </main>
  )
}

export default Container