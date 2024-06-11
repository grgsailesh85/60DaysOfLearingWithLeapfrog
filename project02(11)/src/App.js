import {useState} from 'react';
const App = () =>{
  const [showImage,setShowImage] = useState(true)
  const [bgDiv, setBgDiv] = useState('red')
  const [input,setInput] = useState(" ")
  const [fontSize , setFontSize] = useState(30)
  const [color,setColor] = useState("red")

  return(
    <div style={{
      minHeight:'100vh',
      background:'#ddd'
    }}>
      <div style={{
        background:'white',
        padding:'48px',
        width:' 50%',
        margin:'0 auto',
        display:'flex',
        flexDirection:'column',
        gap:'32px'

      }}>
        <div style={{
          display:'flex',
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center'
        }}>
          <h1 style={{
            padding:0,
            marginBottom:0
          }}>Sailesh Gurung</h1>
          <p style={{
            padding:0,
            margin:0,
            color:'gray'
          }}>State Management React Application</p>
        </div>

        <div>
          <h2>Show And Hide App</h2>
          { showImage && <img src="./images/spider.jpg" alt="" width="100%"></img> }
          
          <button 
          onClick = {()=>{
            setShowImage(!showImage)
          }}
          style={{
            background:'dodgerblue',
            color:'white',
            padding:'12px 24px',
            borderRadius:4 ,
            border:'none',
            marginTop:'8px'

          }}>
            {showImage ? 'Hide' : 'Show'}
          </button>

        </div>

        <div>
          <h2>Background Toggle div</h2>
          <div style={{
            width:'300px',
            height:'300px',
            background:bgDiv,
            borderRadius:'16px'
          }}></div>
          <button 
          onClick = {()=>{
            setBgDiv(bgDiv === 'red' ? 'blue' : 'red')
          }}
          style={{
            background:'dodgerblue',
            color:'white',
            padding:'12px 24px',
            borderRadius:4 ,
            border:'none',
            marginTop:'8px'

          }}>
            {bgDiv ==="red" ? 'Change To Blue' : 'Change To Red'}
          </button>
        </div>

        <div>
          <h2>Live Input Review</h2>
          <input 
            placeholder='Type Your Text Here'
            style={{
              border:'1px solid #ccc',
              padding:8,
              width:300
            }}
            onChange={(e)=>setInput(e.target.value)}
          />
          <h1>{input}</h1>
        </div>

        <div>
          <h2>Font Increaser</h2>
          <p style={{
            fontSize: fontSize
          }}>Sailesh Gurung</p>
          <input 
            type='range' 
            min ="30" 
            max="100"
            step = "1"
            onChange={
              (e)=>{
                setFontSize(Number(e.target.value))
              }}
          />
        </div>

        <div>
          <h1>Color Value Sample</h1>
          <input 
            placeholder='Enter Color Name'
            onChange={(e)=>{setColor(e.target.value)}}
            value={color}/>
          <div style={{
            width:'150px',
            height:'150px',
            background: color,
            marginTop:'16px'
          }}/>
        </div>
        
      </div>
    </div>
  )
}
export default App;