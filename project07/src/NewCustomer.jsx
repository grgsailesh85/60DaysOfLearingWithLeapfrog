import { useDispatch } from "react-redux"
import { createCustomer } from "./redux/slices/customer"
import { useState } from "react"
const NewCustomer = () =>{
    const dispatch = useDispatch()

    const [form, setForm] = useState({
        customerName : '',
        product : '',
        price : '',
        discount : ''
    })

    const addNewCustomer = (e) =>{
        e.preventDefault()
        dispatch(createCustomer(form))
    }

    const handleChange = (e) =>{
        const input = e.target
        const name = input.name
        const value = input.value
        setForm({
            ...form,
            [name] : value
        })
    }



    return(
        <div className="bg-gray-200 min-h-screen">
            <div className="w-6/12 bg-white mx-auto p-8 shadow-lg space-y-8">
                <h1 className=" text-5xl font-bold text-center">New Customer</h1>
                <form action="" className="space-y-6" onSubmit={ addNewCustomer }>
                    <div className="flex flex-col gap-3">
                        <label htmlFor="" className="text-lg font-medium">Customer's Name</label>
                        <input 
                            name="customerName"
                            required
                            type="text" 
                            className="border border-gray-300 rounded p-3"
                            placeholder="Enter Customer's Name"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="flex flex-col gap-3">
                        <label htmlFor="" className="text-lg font-medium">Product</label>
                        <input 
                            name="product"
                            required
                            type="text" 
                            className="border border-gray-300 rounded p-3"
                            placeholder="Enter Products Name"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="flex flex-col gap-3">
                        <label htmlFor="" className="text-lg font-medium">Price</label>
                        <input 
                            name="price"
                            required
                            type="number" 
                            className="border border-gray-300 rounded p-3"
                            placeholder="Enter Products Price"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="flex flex-col gap-3">
                        <label htmlFor="" className="text-lg font-medium">Discount</label>
                        <input 
                            name="discount"
                            required
                            type="number" 
                            className="border border-gray-300 rounded p-3"
                            placeholder="Enter Discount Rate"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="flex flex-col gap-3">
                        <button className="py-4 rounded bg-indigo-600 text-white">
                            Submit
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}
export default NewCustomer