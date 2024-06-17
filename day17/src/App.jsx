import { useRef } from "react";
const App = () =>{
  const title =useRef(null)
  const input = useRef(null)
  const test = ()=>{
    title.current.style.color = "blue"
    title.current.style.fontSize = '100px'
    console.log(input.current.value)
  }
  return(
    <>
      <div>
        <h2 ref={title}>useRef Hook</h2>
        <input type="text" ref={input}/>
        <button onClick={test}>Click</button>
      </div>
    </>
  )
}
export default App;