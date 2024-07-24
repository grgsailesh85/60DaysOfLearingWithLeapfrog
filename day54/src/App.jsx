import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Product from "./components/Product"
import ProductDetail from "./components/ProductDetails"
const App = () =>{
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Product/>}/>
          <Route path="/product-details" element={<ProductDetail/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App 