import { useState , useEffect} from "react"
const App = () =>{
  const [photos, setPhotos] = useState([])

  useEffect(()=>{
    test()
  },[])
  const test = async () =>{
    try
    {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      setPhotos(data)
    }
    catch (err)
    {
      console.log(err)
    }
  }
  return (
    <div>
      <h1>Async Await Try Catch Exception</h1>
      <button onClick={test}>Click To Fetch Fake Data</button>
      <div style={{
        margin: '50px auto',
        width:'90%',
        display:"flex",
        gap:48,
        flexWrap:"wrap",
        justifyContent:'center'
      }}>

        {
          photos.map((item, index)=>(
            <div key={index} style={{
              width: "calc(25% - 48px)",
              border:'1px solid #ccc',
              padding:16,
              boxSizing:"border-box",
              borderRadius:'8px',
              boxShadow: '0 0 8px #ddd',
              textAlign:'center'
            }}>
              <img src={item.image} width="180"/>
              <h3 style={{
                padding:0,
                marginBottom:6
              }}>Title:{item.title}</h3>
              <p style={{
                color:'gray',
                padding:0,
                marginBottom:0
              }}>Description: {item.description.slice(0,75)}</p>
              <p style={{
                textTransform:'capitalize',
                color:'gray',
                padding:0,
                margin:0
              }}>Category: {item.category}</p>
            </div>
          ))
        }

      </div>
    </div>
  )
}
export default App;