import { useState } from "react";
const App = () =>{
  const [count, setCount] = useState(1)
  return(
    <div>
      <h1>Sailesh Gurung</h1>
      <button onClick={()=>setCount(count+1)}>
        count - {count}
      </button>
    </div>
  )
}
export default App;