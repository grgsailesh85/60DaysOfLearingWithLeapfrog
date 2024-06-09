import {useState} from "react";
const App =()=>{
  const [show, setShow] = useState(true)
  const test = () =>{
    setShow(!show)
  }
  return(
    <div>
      <h1>useState Hook </h1>
      { show && <h2>Sailesh Gurung</h2>}
      <button onClick={test}>
        { show ? 'Hide' : 'Show'}
      </button>
    </div>
  )
}
export default App