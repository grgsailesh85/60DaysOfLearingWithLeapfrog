import { useState } from "react"
import { Link } from "react-router-dom"
const Login = () =>{
    const [passwordType, setPasswordType] = useState("password")
    return(
        <div className="grid md:grid-cols-2 md:min-h-screen md:overflow-hidden animate__animated animate__fadeIn">
            <img src="/images/login.png" alt="" className="w-full md:h-full h-24 object-cover" />
            <div className="flex flex-col md:p-16 p-8">
                <h1 className="text-4xl font-bold">Sign In</h1>
                <p className="text-lg text-gray-600">Enter profile details to login</p>
                <form action="" className="md:mt-8 space-y-6">

                    <div className="flex flex-col">
                        <label htmlFor="" className="font-semibold text-lg mb-1">Email</label>
                        <input 
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
                        className="py-3 px-8 rounded bg-blue-600 text-white font-semibold hover:bg-rose-500">
                            Login
                        </button>
                </form>
                <div>
                    Dont't have an account ? <Link to="/signup" className="text-blue-600 font-semibold hover:underline"> Register Now </Link>
                </div>
            </div>
        </div>
    )
}
export default Login