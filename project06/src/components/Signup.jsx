import { useState } from "react"
import { Link } from "react-router-dom"
import firebaseAppConfig from "../util/firebase-config"
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'

const auth = getAuth(firebaseAppConfig)

const Signup = () =>{
    const [passwordType, setPasswordType] = useState("password")

    const [error, setError] = useState(null)

    const [formValue, setFormValue] = useState({
        fullname:'',
        email:'',
        password:''
    })
    

    const signup = async (e) =>{
        try{
            e.preventDefault()
            const user = await createUserWithEmailAndPassword(auth, formValue.email, formValue.password)
            console.log(user)
        }
        catch(err){
            setError(err.message)
        }
        
    }

    const handleOnChange = (e) =>{
        const input = e.target
        const name = input.name
        const value = input.value
        setFormValue({
            ...formValue,
            [name] : value
        })
        setError(null)
    }


    return(
        <div className="grid md:grid-cols-2 md:min-h-screen md:overflow-hidden animate__animated animate__fadeIn">
            <img src="/images/signup.jpg" alt="" className="w-full md:h-full h-24 object-cover" />
            <div className="flex flex-col md:p-16 p-8">
                <h1 className="text-4xl font-bold">New User</h1>
                <p className="text-lg text-gray-600">Create Your Account To Start Shopping</p>
                <form action="" className="md:mt-8 space-y-6" onSubmit={signup}>
                    <div className="flex flex-col">
                        <label htmlFor="" className="font-semibold text-lg mb-1">Full Name</label>
                        <input 
                            onChange={handleOnChange}
                            required
                            type="text" 
                            name = "fullname"
                            placeholder="Enter Your Full Name"
                            className="p-3 border border-gray-300 rounded"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="" className="font-semibold text-lg mb-1">Email</label>
                        <input 
                            onChange={handleOnChange}
                            required
                            type="email" 
                            name = "email"
                            placeholder="example@email.com"
                            className="p-3 border border-gray-300 rounded"
                        />
                    </div>

                    <div className="flex flex-col relative">
                        <label htmlFor="" className="font-semibold text-lg mb-1">Password</label>
                        <input 
                            onChange={handleOnChange}
                            required
                            type={passwordType} 
                            name = "password"
                            placeholder="***********"
                            className="p-3 border border-gray-300 rounded"
                        />
                        <button 
                            type="button"
                            onClick={()=>setPasswordType(passwordType === "password" ? "text" : "password")} 
                            className="absolute top-11 right-4 w-8 h-8 rounded-full hover:bg-blue-200 hover:text-blue-600"
                        >
                            {
                                passwordType === "password" ? 
                                <i className="ri-eye-line"></i> 
                                :
                                <i className="ri-eye-off-line"></i>
                            }
                        </button>
                    </div>
                    
                    <button 
                        className="py-3 px-8 rounded bg-blue-600 text-white font-semibold hover:bg-rose-500 ">
                            Sign Up
                        </button>
                </form>
                <div>
                    Already have an account ? <Link to="/login" className="text-blue-600 font-semibold hover:underline"> Sign In</Link>
                </div>

                {
                    error &&
                    <div className="flex justify-between items-center  mt-2 bg-rose-600 p-3 rounded shadow text-white font-semibold animate__animated animate__pulse">
                        <p>{error}</p>
                        <button onClick={()=>setError(null)}>
                            <i className="ri-close-line"></i> 
                        </button>
                    </div>
                }

            </div>
        </div>
    )
}
export default Signup