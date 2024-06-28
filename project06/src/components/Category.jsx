import { useState } from "react"
import Layout from "./Layout"
import 'remixicon/fonts/remixicon.css'

const Category = () =>{
    const [category, setCategory] = useState([
        {
            title: 'Electronic'
        },
        {
            title: 'Fashion'
        },
        {
            title: 'Smart Phones'
        },
        {
            title: 'Furniture'
        },
        {
            title: 'Men`s'
        },
        {
            title: 'Women`s'
        },
        {
            title: 'Sports'
        },
        {
            title: 'Bikes'
        },
        
        
    ])
    return(
        <Layout>
            <div className="md:p-16 p-8">
                <div className="md:w-10/12 mx-auto grid md:grid-cols-4 md:gap-10 gap-8">
                    {
                        category.map((item,index)=>(
                            <div key={index} className="hover:bg-orange-600 hover:text-white border rounded-lg bg-white shadow-lg flex flex-col p-8 justify-center items-center">
                                <i className="ri-menu-search-line text-6xl"></i>
                                <h1 className="text-2xl font-bold ">{item.title}</h1>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Layout>
    )
}
export default Category