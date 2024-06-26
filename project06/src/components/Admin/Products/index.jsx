import { useState } from "react"
import Layout from "../Layout"
const Products =()=>{
    const [products , setProducts] = useState([
        {
            title:'mens shirt slim blue',
            price: 4500,
            discount:20,
            description: 'this is the best shirt available in online market',
            images:'/products/a.jpg'
        },
        {
            title:'mens shirt slim blue',
            price: 4500,
            discount:20,
            description: 'this is the best shirt available in online market',
            images:'/products/b.jpg'
        },
        {
            title:'mens shirt slim blue',
            price: 4500,
            discount:20,
            description: 'this is the best shirt available in online market',
            images:'/products/c.jpg'
        },
        {
            title:'mens shirt slim blue',
            price: 4500,
            discount:20,
            description: 'this is the best shirt available in online market',
            images:'/products/d.jpg'
        },
        {
            title:'mens shirt slim blue',
            price: 4500,
            discount:20,
            description: 'this is the best shirt available in online market',
            images:'/products/e.jpg'
        },
        {
            title:'mens shirt slim blue',
            price: 4500,
            discount:20,
            description: 'this is the best shirt available in online market',
            images:'/products/f.jpg'
        },
        {
            title:'mens shirt slim blue',
            price: 4500,
            discount:20,
            description: 'this is the best shirt available in online market',
            images:'/products/g.jpg'
        },
        {
            title:'mens shirt slim blue',
            price: 4500,
            discount:20,
            description: 'this is the best shirt available in online market',
            images:'/products/g.jpg'
        },
        {
            title:'mens shirt slim blue',
            price: 4500,
            discount:20,
            description: 'this is the best shirt available in online market',
            images:'/products/i.jpg'
        },
        {
            title:'mens shirt slim blue',
            price: 4500,
            discount:20,
            description: 'this is the best shirt available in online market',
            images:'/products/j.jpg'
        },
        {
            title:'mens shirt slim blue',
            price: 4500,
            discount:20,
            description: 'this is the best shirt available in online market',
            images:'/products/k.jpg'
        },
        {
            title:'mens shirt slim blue',
            price: 4500,
            discount:20,
            description: 'this is the best shirt available in online market',
            images:'/products/l.jpg'
        }
    ])
    return(
        <Layout>
            <div>
                <h1 className="text-xl font-semibold mb-4">Products</h1>
                <div className="grid grid-cols-4 gap-4">
                    {
                        products.map((item,index)=>(
                            <div key={index} className="bg-white shadow-lg rounded-md">
                                <img 
                                    src={item.images} 
                                    alt=""
                                    className="rounded-t-md h-[250px] w-full object-fit"

                                />
                                <div className="p-4">
                                    <h1 className="text-lg capitalize font-semibold">{item.title}</h1>
                                    <p className="text-gray-500">{item.description.slice(0,50)}</p>
                                    <div className="flex gap-3 mt-1">
                                        <p>{item.price-(item.price*item.discount)/100}</p>
                                        <del>Rs{item.price}</del>
                                        <label className="text-gray-600"> ({item.discount}% Off) </label>

                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Layout>
    )
}
export default Products