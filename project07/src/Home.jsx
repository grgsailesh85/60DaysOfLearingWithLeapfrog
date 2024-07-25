import { Link } from "react-router-dom"
const Home = () =>{
  const customers= [
    {
      customerName : 'Sailesh',
      product : 'Red Shirt Newly Launched',
      price : '2000',
      discount : '50'
    },
    {
      customerName : 'Sailesh',
      product : 'Red Shirt Newly Launched',
      price : '2000',
      discount : '50'
    },
    {
      customerName : 'Sailesh',
      product : 'Red Shirt Newly Launched',
      price : '2000',
      discount : '50'
    },
    {
      customerName : 'Sailesh',
      product : 'Red Shirt Newly Launched',
      price : '2000',
      discount : '50'
    },
    {
        customerName : 'Sailesh',
        product : 'Red Shirt Newly Launched',
        price : '2000',
        discount : '50'
      },
      {
        customerName : 'Sailesh',
        product : 'Red Shirt Newly Launched',
        price : '2000',
        discount : '50'
      },
  ]
  return(
    <div className='bg-gray-200 min-h-screen py-16'>
      <div className='bg-white rounded-lg shadow-lg w-8/12 mx-auto p-6 space-y-8'>
        <div className='flex justify-center'>
          <img src="/logo.svg" alt="" />
        </div>        
        {/* <h1 className='text-6xl font-bold text-center'>Leapfrog</h1> */}
        <div className='flex justify-between items-center'>
          <h1 className='text-4xl font-bold text-rose-600'><span className='text-green-700'>REDUX</span> CRUD</h1>
          <Link to="/new-customer" className='text-white bg-indigo-600 px-6 py-2.5 rounded-md font-medium'>
            <i className='ri-sticky-note-add-line mr-2'></i>
            New Customer
          </Link>
        </div>
        <table className='w-full'>
          <thead>
            <tr className='bg-violet-50 text-left'>
              <th className='py-3 pl-3'>SN</th>
              <th>Customer's Name</th>
              <th>Product</th>
              <th>Price</th>
              <th>Discount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              customers.map((item, index)=>(
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-rose-50' }>
                  <td>{index+1}</td>
                  <td className='py-3 pl-3'>{item.customerName}</td>
                  <td>{item.product}</td>
                  <td>{item.price}</td>
                  <td>{item.discount}</td>
                  <td>
                    <div className='space-x-3'>
                      <button className='bg-indigo-600 w-10 h-10 rounded'>
                        <i className='ri-file-edit-line text-white'></i>
                      </button>

                      <button className='bg-rose-600 w-10 h-10 rounded'>
                        <i className='ri-delete-bin-6-line text-white'></i>
                      </button>
                    </div>
                  </td>

                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default Home 