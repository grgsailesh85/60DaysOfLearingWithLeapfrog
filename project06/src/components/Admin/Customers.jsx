import { useState } from "react"
import Layout from "./Layout"
const Customers = () =>{
    const [customers, setCustomers] = useState([
        {
            customerName: 'Sailesh Gurung',
            email: 'saileshgrg98@gmail.com',
            mobile: '9812345678',
            date:'12-10-2024',
            address:'Ratnanagar-14,Chitwan'
        },
    ])
    return(
        <Layout>
            <div>
                <h1 className="text-xl font-semibold">Customers</h1>
                <div className="mt-6">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-rose-600 text-white text-left">
                                <th className="px-4 py-3">Customer's Name</th>
                                <th>Email</th>
                                <th>Mobile</th>          
                                <th>Date</th>
                                <th>Address</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                customers.map((item, index)=>(
                                    <tr 
                                        key={index} 
                                        style={{
                                            background: (index+1)%2 === 0 ? '#f1f5f9' : 'white'
                                    }}>
                                        <td className="capitalize px-4 py-3">
                                            <div className="flex gap-3">
                                                <img 
                                                    src="/images/avatar.jpg" 
                                                    alt="" 
                                                    className="w-10 h-10 rounded-full"
                                                />
                                                <div className="flex flex-col">
                                                    <h1 className="font-semibold">{item.customerName}</h1>
                                                    <small className="text-gray-600">{item.date}</small>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{item.email}</td>
                                        <td>{item.mobile}</td>
                                        <td>{item.date}</td>
                                        <td>{item.address}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    )
}
export default Customers