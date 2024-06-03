import React from 'react';

function App() {
  var x = 10;
  var y = 12;
  var z = x + y;
  return (
    <div>
      <h1 style = {{
        color:'red',
        fontSize: '80px',
        backgroundColor: 'blue'
      }}>
        About Me
      </h1>
      <p style={{
        color: 'blue',
        fontSize:'40px',
        background: 'red'
      }}>
        Hello, Everyone!, My name is Sailesh Gurung and I am a fresh graduate Computer Engineer.</p>
      <h3>Example of jsx</h3>
      <p>The sum of x=10 and y=12 is {z}. </p>
    </div>
  );
}
export default App;
