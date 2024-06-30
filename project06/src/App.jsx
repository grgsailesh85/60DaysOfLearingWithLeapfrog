import 'remixicon/fonts/remixicon.css'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import 'animate.css';
import NotFound from './components/NotFound'
import Products from './components/Admin/Products'
import Orders from './components/Admin/Orders'
import Dashboard from './components/Admin/Dashboard'
import Customers from './components/Admin/Customers'
import Payments from './components/Admin/Payments'
import Settings from './components/Admin/Settings'
import Home from './components/Home'
import Product from './components/Product'
import Category from './components/Category'
import Login from './components/Login'
import Signup from './components/Signup'


const App = () =>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Product/>}/>
        <Route path="/category" element={<Category/>}/>
        <Route path ="/login" element={<Login/>}/>
        <Route path ="signup" element={<Signup/>}/>
        <Route path="/admin">
          <Route path="products" element={<Products/>}/>
          <Route path="orders" element={<Orders/>}/>
          <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="payments" element={<Payments/>}/>
          <Route path="settings" element={<Settings/>}/>
          <Route path="customers" element={<Customers/>}/>
        </Route>
        <Route  path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App