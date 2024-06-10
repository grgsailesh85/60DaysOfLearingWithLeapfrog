import { useState } from 'react'
const App = () =>{
  const [fontSize, setFontSize] = useState(40)
  
  return(
    <div>
      <h1 style ={{
        fontSize: fontSize,
        color: fontSize ===40? "red" : 'blue'
      }}>
        Sailesh Gurung
      </h1>
      <button onClick={()=>{
        setFontSize(fontSize===40? 100 : 40)
      }}>
        Change
      </button>
    </div>
  )
}
export default App;
