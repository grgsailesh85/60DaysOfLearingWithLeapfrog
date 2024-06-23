import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
const App = () =>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<h1>Welcome To Admin</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App