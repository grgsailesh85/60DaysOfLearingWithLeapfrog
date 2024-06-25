import { useState } from "react"
import Layout from "./Layout"
const Orders = () =>{
    const [orders, setOrders] = useState([
        {
            orderId:'#SA19I7',
            customerName: 'Sailesh Gurung',
            email: 'saileshgrg98@gmail.com',
            mobile: '9812345678',
            product:'Play-Station Slim',
            amount : 52000,
            date:'12-10-2024',
            status : 'pending'
        },
        {
            orderId:'#SA19I7',
            customerName: 'Sailesh Gurung',
            email: 'saileshgrg98@gmail.com',
            mobile: '9812345678',
            product:'Play-Station Slim',
            amount : 52000,
            date:'12-10-2024',
            status : 'pending'
        },
        {
            orderId:'#SA19I7',
            customerName: 'Sailesh Gurung',
            email: 'saileshgrg98@gmail.com',
            mobile: '9812345678',
            product:'Play-Station Slim',
            amount : 52000,
            date:'12-10-2024',
            status : 'pending'
        },
        {
            orderId:'#SA19I7',
            customerName: 'Sailesh Gurung',
            email: 'saileshgrg98@gmail.com',
            mobile: '9812345678',
            product:'Play-Station Slim',
            amount : 52000,
            date:'12-10-2024',
            status : 'pending'
        },
        {
            orderId:'#SA19I7',
            customerName: 'Sailesh Gurung',
            email: 'saileshgrg98@gmail.com',
            mobile: '9812345678',
            product:'Play-Station Slim',
            amount : 52000,
            date:'12-10-2024',
            status : 'pending'
        },
        {
            orderId:'#SA19I7',
            customerName: 'Sailesh Gurung',
            email: 'saileshgrg98@gmail.com',
            mobile: '9812345678',
            product:'Play-Station Slim',
            amount : 52000,
            date:'12-10-2024',
            status : 'pending'
        },
        {
            orderId:'#SA19I7',
            customerName: 'Sailesh Gurung',
            email: 'saileshgrg98@gmail.com',
            mobile: '9812345678',
            product:'Play-Station Slim',
            amount : 52000,
            date:'12-10-2024',
            status : 'pending'
        },
        {
            orderId:'#SA19I7',
            customerName: 'Sailesh Gurung',
            email: 'saileshgrg98@gmail.com',
            mobile: '9812345678',
            product:'Play-Station Slim',
            amount : 52000,
            date:'12-10-2024',
            status : 'pending'
        },
        {
            orderId:'#SA19I7',
            customerName: 'Sailesh Gurung',
            email: 'saileshgrg98@gmail.com',
            mobile: '9812345678',
            product:'Play-Station Slim',
            amount : 52000,
            date:'12-10-2024',
            status : 'pending'
        },
        {
            orderId:'#SA19I7',
            customerName: 'Sailesh Gurung',
            email: 'saileshgrg98@gmail.com',
            mobile: '9812345678',
            product:'Play-Station Slim',
            amount : 52000,
            date:'12-10-2024',
            status : 'pending'
        },
        
    ])
    return(
        <Layout>
            <div>
                <h1 className="text-xl font-semibold">Orders</h1>
                <div className="mt-6">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-rose-600 text-white">
                                <th className="py-4">OrderID</th>
                                <th>Customer's Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Product</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((item, index)=>(
                                    <tr 
                                        className="text-center" 
                                        key={index} 
                                        style={{
                                            background: (index+1)%2 === 0 ? '#cbd5e1' : '#cffafe'
                                    }}>
                                        <td className="py-4">{item.orderId}</td>
                                        <td className="capitalize">{item.customerName}</td>
                                        <td>{item.email}</td>
                                        <td>{item.mobile}</td>
                                        <td className="capitalize">{item.product}</td>
                                        <td>Rs.{item.amount.toLocaleString()}</td>
                                        <td>{item.date}</td>
                                        <td className="capitalize">
                                            <select name="" id="" className="border p-1 border-gray-200">
                                                <option value="pending">Pending</option>
                                                <option value="processing">Processing</option>
                                                <option value="dispatched">Dispatched</option>
                                                <option value="returned">Returned</option>
                                            </select>
                                        </td>
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
export default Orders