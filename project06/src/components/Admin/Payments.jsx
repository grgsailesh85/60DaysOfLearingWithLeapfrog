import { useState } from "react"
import Layout from "./Layout"
const Payments = () =>{
    const [payments, setPayments] = useState([
        {
            paymentId: '#ras198i',
            customerName: 'Sailesh Gurung',
            email: 'saileshgrg98@gmail.com',
            mobile: '9812345678',
            product:'ASUS Laptop',
            amount: 5000,
            date:'12-10-2024',
        },
    ])
    return(
        <Layout>
            <div>
                <h1 className="text-xl font-semibold">Payments</h1>
                <div className="mt-6">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-rose-600 text-white text-left">
                                <th className="p-4">Payment ID</th>
                                <th>Customer's Name</th>
                                <th>Email</th>
                                <th>Mobile</th> 
                                <th>Product</th> 
                                <th>Amount</th>                             
                                <th>Date</th>
                            
                            </tr>
                        </thead>
                        <tbody>
                            {
                                payments.map((item, index)=>(
                                    <tr 
                                        key={index} 
                                        style={{
                                            background: (index+1)%2 === 0 ? '#cbd5e1' : 'white'
                                    }}>
                                        <td className="py-4">{item.paymentId}</td>
                                        <td className="capitalize">{item.customerName}</td>
                                        <td>{item.email}</td>
                                        <td>{item.mobile}</td>
                                        <td className="capitalize">{item.product}</td>
                                        <td>Rs.{item.amount.toLocaleString()}</td>
                                        <td>{item.date}</td>
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
export default Payments