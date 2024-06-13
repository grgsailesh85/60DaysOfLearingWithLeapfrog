//update and delete array useState
import {useState} from 'react'
const App = () =>{
  const [students, setStudents] = useState([
    "Sailesh",
    "Gurung",
    "Rashmi",
    "Gita",
    "Nepal",
    "Chitwan"
  ])
  const [value, setValue] = useState("")

  const deleteList = (index) =>{
    const copyOfArray = [...students]
    copyOfArray.splice(index,1)
    setStudents(copyOfArray)
  }

  const createList = () =>{
    setStudents([
      ...students,
      value
    ])
  }

  return(
    <div>
      <h1>Sailesh Gurung</h1>
      <ul>
        {
          students.map((student,index)=>(
            <li key={index}>
              {student}
              <button onClick={()=>deleteList(index)}>
                Delete
              </button>
            </li>
          ))
        }
      </ul>

      <input
        onChange={(e)=>setValue(e.target.value)}/>
      <button
        onClick={createList}>
        Add
      </button>
    </div>
  )
}
export default App