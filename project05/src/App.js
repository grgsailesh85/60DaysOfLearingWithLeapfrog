import { useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import './App.css'

const App = ()=>{
  const [right, setRight] = useState(-450)
  const [students, setStudents] = useState([])
  const [form, setForm] = useState({
    fullname: '',
    class: '',
    roll: '',
    subject: '',
    dob: ''
  })

  const handleDrawer = ()=>{
    setRight(0)
  }

  const handleInput = (e)=>{
    const input = e.target
    const value = input.value
    const key = input.name
    setForm({
      ...form,
      [key]: value
    })
  }

  const createStudent = (e)=>{
    e.preventDefault()
    setStudents([
      ...students,
      form
    ])
    setForm({
      fullname: '',
      class: '',
      roll: '',
      subject: '',
      dob: ''
    })
    setRight(-450)
  }

  const deleteStudent = (index)=>{
    const backup = [...students]
    backup.splice(index, 1)
    setStudents(backup)
  }

  return (
    <div style={{
      background: '#ddd',
      minHeight: '100vh'
    }}>
      <div style={{
        width: '70%',
        background: 'white',
        margin: '32px auto',
        padding: 32
      }}>
        <h1 style={{
          padding: 0,
          margin: 0,
          textAlign: 'center'
        }}>CodingOtt</h1>

        <button 
          onClick={handleDrawer}
          style={{
            border: 'none',
            background: '#8407ba',
            color: 'white',
            padding: '14px 24px',
            borderRadius: 4,
            fontSize: 16,
            margin: '24px 0'
          }}
        >
          <i className="ri-user-add-line" style={{marginRight: 8}}></i>
          New Student
        </button>

        <table className='crud-app'>
          <thead>
            <tr>
              <th>S/No</th>
              <th>Student`s name</th>
              <th>Subject</th>
              <th>Class</th>
              <th>Roll</th>
              <th>DOB</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {
              students.map((item, index)=>(
                <tr>
                  <td>{index+1}</td>
                  <td>{item.fullname}</td>
                  <td>{item.subject}</td>
                  <td>{item.class}</td>
                  <td>{item.roll}</td>
                  <td>{item.dob}</td>
                  <td>
                    <div>
                      <button style={{
                        border: 'none',
                        width: 32,
                        height: 32,
                        background: '#07c65d',
                        color: 'white',
                        borderRadius: 4,
                        marginRight: 12
                      }}>
                        <i className="ri-image-edit-line"></i>
                      </button>

                      <button 
                        onClick={()=>deleteStudent(index)}
                        style={{
                          border: 'none',
                          width: 32,
                          height: 32,
                          background: 'red',
                          color: 'white',
                          borderRadius: 4
                        }}
                      >
                        <i className="ri-delete-bin-6-line"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

      <aside style={{
        position: 'fixed',
        top: 0,
        right: right,
        width: 450,
        background: 'white',
        height: '100%',
        boxShadow: '0 0 40px rgba(0,0,0,0.2)',
        padding: 32,
        boxSizing: 'border-box',
        transition: '0.3s'
      }}>
        <button 
          onClick={()=>setRight(-450)}
          style={{
            border: 'none',
            background: 'transparent',
            fontSize: 18,
            color: '#8407ba',
            position: 'absolute',
            top: 20,
            right: 20
          }}
        >
          <i className="ri-close-circle-line"></i>
        </button>
        <h1>New Student</h1>

        <form 
            onSubmit={createStudent}
            style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 24
          }}
          >
          <input 
            value={form.fullname}
            onChange={handleInput}
            required
            name="fullname"
            type="text"
            placeholder="Enter your fullname here"
            style={{
              border: '1px solid #ccc',
              padding: 16,
              borderRadius: 4
            }}
          />

        <input 
            value={form.class}
            onChange={handleInput}
            required
            name="class"
            type="number"
            placeholder="Enter your class"
            style={{
              border: '1px solid #ccc',
              padding: 16,
              borderRadius: 4
            }}
          />

        <input 
            value={form.roll}
            onChange={handleInput}
            required
            name="roll"
            type="number"
            placeholder="Enter your roll"
            style={{
              border: '1px solid #ccc',
              padding: 16,
              borderRadius: 4
            }}
          />

        <input 
            value={form.subject}
            onChange={handleInput}
            required
            name="subject"
            type="text"
            placeholder="Enter your subject here"
            style={{
              border: '1px solid #ccc',
              padding: 16,
              borderRadius: 4
            }}
          />

          <input 
            value={form.dob}
            onChange={handleInput}
            required
            name="dob"
            type="date"
            style={{
              border: '1px solid #ccc',
              padding: 16,
              borderRadius: 4
            }}
          />

          <button style={{
            border: 'none',
            background: '#8407BA',
            color: 'white',
            fontSize: 16,
            padding: '14px 0',
            borderRadius: 4
          }}>SUBMIT</button>
        </form>
      </aside>
    </div>
  )
}

export default App