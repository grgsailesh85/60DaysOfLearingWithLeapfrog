import Layout from "./Layout"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { useState } from "react";
const Product = () =>{
    const [products, setProducts] = useState([
        {
            title:'New Blue Shirts mens',
            price:1200 ,
            discount: 50,
            thumbnail:'/products/e.jpg'
        },
        {
            title:'New Blue Shirts mens',
            price:1200 ,
            discount: 20,
            thumbnail:'/products/b.jpg'
        },
        {
            title:'New Blue Shirts mens',
            price:1200 ,
            discount: 15,
            thumbnail:'/products/c.jpg'
        },
        {
            title:'New Blue Shirts mens',
            price:1200 ,
            discount: 15,
            thumbnail:'/products/d.jpg'
        },
        {
            title:'New Blue Shirts mens',
            price:1200 ,
            discount: 10,
            thumbnail:'/products/e.jpg'
        },
        {
            title:'New Blue Shirts mens',
            price:1200 ,
            discount: 15,
            thumbnail:'/products/f.jpg'
        },
        {
            title:'New Blue Shirts mens',
            price:1200 ,
            discount: 15,
            thumbnail:'/products/g.jpg'
        },
        {
            title:'New Blue Shirts mens',
            price:1200 ,
            discount: 15,
            thumbnail:'/products/i.jpg'
        },
        {
            title:'New Blue Shirts mens',
            price:1200 ,
            discount: 15,
            thumbnail:'/products/j.jpg'
        },
        {
            title:'New Blue Shirts mens',
            price:1200 ,
            discount: 15,
            thumbnail:'/products/k.jpg'
        },
        {
            title:'New Blue Shirts mens',
            price:1200 ,
            discount: 15,
            thumbnail:'/products/l.jpg'
        },
        {
            title:'New Blue Shirts mens',
            price:1200 ,
            discount: 15,
            thumbnail:'/products/f.jpg'
        }
    ])
    return(
        <Layout>
            <div>
                <div className="md:p-16 p-8">
                    <h1 className="text-3xl font-bold text-center">All Products</h1>
                    <p className="text-center text-gray-600 md:w-7/12 mx-auto mt-2 mb-16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vel iste minus veritatis assumenda sit.</p>
                    <div className="md:w-11/12 mx-auto grid md:grid-cols-4 gap-2">
                        {
                            products.map((item,index)=>(
                                <div key={index} className="bg-white shadow-lg border">
                                    <img src={item.thumbnail} alt="" />
                                    <div className="p-2">
                                        <h1 className="text-lg text-semibold">{item.title}</h1>
                                        <div className="space-x-2">
                                            <label htmlFor="" className="font-semibold text-lg">Rs.{item.price-(item.price*item.discount)/100}</label>
                                            <del>Rs.{item.price}</del>
                                            <label htmlFor=""> ({item.discount})% </label>
                                        </div>
                                        <button className="bg-green-500 py-2 w-full rounded text-white font-semibold mt-4">Buy Now</button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default Product

