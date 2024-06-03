function App(){
  var x = 100
  return(
    <div>
      <nav style={{
        width: "100%",
        backgroundColor: "red"
      }}>
        <ul style={{
          padding: 0,
          margin: 0,
          display: "flex",
          listStyle: 'none',
          justifyContent: "space-evenly"
        }}>
          <li>
            <a href="#" style={{
              textDecoration:"none",
              color:"white",
              padding:"8px",
              display: "block",
              fonstSize: 18
            }}>
              Home
            </a>
          </li>
          <li>
            <a href="#" style={{
              textDecoration:"none",
              color:"white",
              padding:"8px",
              display: "block",
              fonstSize: 18
              }}>
              About Me
            </a>
            </li>
          <li>
            <a href="#"  style={{
              textDecoration:"none",
              color:"white",
              padding:"8px",
              display: "block",
              fonstSize: 18
            }}>
              Project
            </a>
          </li>
          <li>
            <a href="#"  style={{
              textDecoration:"none",
              color:"white",
              padding:"8px",
              display: "block",
              fonstSize: 18
            }}>
              Contact Me
            </a>
          </li>
        </ul>
      </nav>

      <section style={{
        width: "75%",
        padding : '34px',
        background: '#f5f5f5',
        margin: '48px auto'
      }}>
        <h1>
          This is section
        </h1>
      </section>

      <footer style={{
        background: '#323232',
        textAlign: "center",
        color: "white",
        padding: 100
      }}>
        <h1>
          This is footer 
        </h1>
      </footer>
    </div>
  )
}
export default App;