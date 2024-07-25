import 'remixicon/fonts/remixicon.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import Home from './Home'
import NewCustomer from './NewCustomer'
const App = () =>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/new-customer" element={<NewCustomer/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App