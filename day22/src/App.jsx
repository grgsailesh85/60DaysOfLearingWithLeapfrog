import { useState } from 'react';
import 'animate.css';

const App = ()=>{
  const model = {
    firstname:'',
    lastname:'',
    email:'',
    password:'',
    username:'',
    phone:''
  }
  const [form, setForm] = useState(model)

  const getFormValue = (e)=>{
    const input = e.target;
    const value = input.value
    const key = input.name
    setForm({
      ...form,
      [key]:value 
    })
  }


  return(
    <div className="bg-gray-100 flex justify-center items-center"> 
      <h1>{JSON.stringify(form)}</h1>
      <div className="bg-white p-8 py-4 w-[450px] shadow-lg rounded animate__animated animate__zoomIn">
        <h1 className='text-2xl font-bold mb-4 text-center'>Sign Up Form</h1>
        <form action="" className='flex flex-col gap-4'>
          <div className='flex flex-col gap-1'>
            <label htmlFor="" className='text-lg font-semibold'>First Name:</label>
            <input 
              type="text"
              name="firstname" 
              placeholder='Enter First Name'
              className='border p-2 rounded border-gray-300'
              onChange={getFormValue}
            />
            {/* <small className='text-rose-600 font-semibold text-sm'>This Field is required</small> */}
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor="" className='text-lg font-semibold'>Last Name:</label>
            <input 
              type="text"
              name="lastname" 
              placeholder='Enter Last Name'
              className='border p-2 rounded border-gray-300'
            />
            {/* <small className='text-rose-600 font-semibold text-sm'>This Field is required</small> */}
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor="" className='text-lg font-semibold'>Email:</label>
            <input 
              type="email"
              name="email" 
              placeholder='example@gmail.com'
              className='border p-2 rounded border-gray-300'
            />
            {/* <small className='text-rose-600 font-semibold text-sm'>This Field is required</small> */}
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor="" className='text-lg font-semibold'>PassWord:</label>
            <input 
              type="password"
              name="password" 
              placeholder='Enter Your Password'
              className='border p-2 rounded border-gray-300'
            />
            {/* <small className='text-rose-600 font-semibold text-sm'>This Field is required</small> */}
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor="" className='text-lg font-semibold'>User Name:</label>
            <input 
              type="text"
              name="username" 
              placeholder='@username'
              className='border p-2 rounded border-gray-300'
            />
            {/* <small className='text-rose-600 font-semibold text-sm'>This Field is required</small> */}
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor="" className='text-lg font-semibold'>Phone Number:</label>
            <input 
              type="number"
              name="phone" 
              placeholder='Enter Your Phone Number'
              className='border p-2 rounded border-gray-300'
            />
            {/* <small className='text-rose-600 font-semibold text-sm'>This Field is required</small> */}
          </div>

          <button className='border-0 bg-indigo-600 text-white rounded py-2 font-semibold'>Submit</button>

        </form>
      </div>
    </div>
  )
}
export default App;