import { useState, useEffect } from "react"
import 'remixicon/fonts/remixicon.css'
import Swal from 'sweetalert2'
import firebaseConfigApp from "./lib/firebase-config"
import {getFirestore, addDoc, collection, getDocs} from 'firebase/firestore'

const db = getFirestore(firebaseConfigApp)

const App = () =>{
  const model = {
    employeeName: '',
    salary : '',
    joiningDate:''
  }

  const [employees, setEmployees] = useState(model)
  const [isEmpty, setIsEmpty] = useState(false)

  useEffect(()=>{
    const req = async () =>{
      const snapshot = await getDocs(collection(db, "employees"))
      setIsEmpty(snapshot.empty)
      snapshot.forEach((doc)=>{
        const documents = doc.data()
        console.log(documents)
      })
     }
    
    req()
  }, [isEmpty])

  const handleChange = (e) =>{
    const input = e.target
    const name = input.name
    const value = input.value 
    setEmployees({
      ...employees,
      [name] : value
    })
  }

  const createEmployee = async (e) =>{
    try {
      e.preventDefault()
      await addDoc(collection(db, "employees"), employees)
      setIsEmpty(false)
      new Swal({
        icon : 'success',
        title : 'Employee Created !'
      })
    }
    catch(err){
      new Swal ({
        icon : 'error',
        title : 'Failed !',
        text : err.message
      })
    }
    finally {
      setEmployees(model)
    }
  }

  return(
    <div className="flex flex-col items-center gap-16">
      <h1 className="text-5xl font-bold">CRUD <span className="text-indigo-600">Application</span></h1>
      <div className="grid grid-cols-2 w-8/12 gap-16">
        <div>
          <form action="" className="space-y-6" onSubmit={createEmployee}>
            <div className="flex flex-col">
              <label htmlFor="" className="font-semibold text-lg mb-2">Employee Name</label>
              <input 
                onChange={handleChange}
                type="text"
                required
                name="employeeName" 
                className="p-3 rounded border border-gray-300"
                placeholder="Enter employee Name"
                value={employees.employeeName}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="" className="font-semibold text-lg mb-2">Salary</label>
              <input 
                onChange={handleChange}
                type="number"
                required
                name="salary" 
                className="p-3 rounded border border-gray-300"
                placeholder="Enter employee salary"
                value={employees.salary}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="" className="font-semibold text-lg mb-2">Joining Date</label>
              <input 
                onChange={handleChange}
                type="date"
                required
                name="joiningDate" 
                className="p-3 rounded border border-gray-300"
                value={employees.joiningDate}
              />
            </div>

            <button className="bg-green-500 px-6 py-3 rounded font-semibold text-white">
              CREATE
            </button>
          </form>
        </div>

        <div>
          {
            isEmpty && 
            <div className="flex flex-col items-center">
              <i className="ri-u-disk-line text-3xl text-gray-500"></i>
              <h1 className="text-3xl text-gray-500">Empty</h1>
            </div>
          }
          <h1 className="text-2xl font-semibold">Employees</h1>
          <table className="w-full mt-8">
            <thead>
              <tr className="bg-rose-600">
                <th>SN</th>
                <th>Employee Name</th>
                <th>Salary</th>
                <th>Joining Date</th>
              </tr>
            </thead>
          </table>
        </div>
        
      </div>
    </div>
  )
}
export default App