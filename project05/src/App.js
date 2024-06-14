import 'remixicon/fonts/remixicon.css';
import {useState} from 'react'
const App = () =>{

  const [right, setRight] = useState(-450)

  const handleDrawer = () =>{
    setRight(0)
  }
  return(
    <div style={{
      background:'#ddd',
      minHeight: '100vh'
    }}>
      <div style={{
        width:'70%',
        background:'white',
        margin:'32px auto',
        padding:32
      }}>
        <h1 style={{
          padding:0,
          margin:0,
          textAlign:'center'
        }}>
          Sailesh Gurung
        </h1>
        <button 
          onClick={handleDrawer}
          style={{
            border:'none',
            background:'#8407ba',
            color:'white',
            padding:'14px 24px',
            borderRadius:'4px',
            fontSize:16
        }}>
          <i className="ri-user-add-line" style={{marginRight:'8px'}}></i>
          New Student
        </button>

      </div>

      <div>
        <aside style={{
          position:'fixed',
          top:0,
          right: right,
          width:450,
          background:'white',
          height:'100%',
          boxShadow:'0 0 10px rgba(0,0,0,0.2)',
          padding:32,
          boxSizing:'border-box',
          transition: '1s'
        }}>
          <button 
            onClick={()=>setRight(-450)}
            style={{
              border:'none',
              background:'transparent',
              fontSize:18,
              color:'#8407ba',
              position:'absolute',
              top:20,
              right:20
          }}>
            <i className="ri-close-circle-line"></i>
          </button>
          <h1>My Drawer</h1>
        </aside>
      </div>
    </div>
  )
}
export default App;