import { Routes,Route } from "react-router-dom"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

const Container = () => {
  return (
      <main className="main">
          <Routes>
              <Route path="/" element={<ItemListContainer/>}></Route>
          </Routes>

      </main>
  )
}

export default Container