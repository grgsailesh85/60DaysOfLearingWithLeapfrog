import {useState} from 'react'
const App = () =>{
  const [value, setValue] = useState("")
  const [data, setData] = useState([])
 
  const addList = ()=>{
    if(value.length === 0){
      alert("Input Field Is Required")
    } else {
      setData([
        ...data, //old values
        value    //new values
      ])
    }
  }

  return(
    <div>
      <h1>Dynamic List (using UseState & Array)</h1>
      <div>
        <input
          onChange={(e)=>setValue(e.target.value)}
          placeholder='Enter Product Name'
          style={{
            border:'1px solid  #ccc',
            padding: 12, 
            borderRadius: 4,
            width:350,            
          }}/>
          <button
            onClick={addList} 
            style={{
              border:'none',
              background:'darkorange',
              padding:13,
              fontWeight:'bold',
              marginLeft:6,
              width:110,
              borderRadius:6
          }}>
            Add
          </button>
      </div>

      <ul>
        {
          data.map((item, index)=>(
            <li key={index}>{item}</li>
          ))
        }
      </ul>
    </div>
  )
}
export default App;