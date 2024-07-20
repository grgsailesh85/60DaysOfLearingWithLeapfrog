import Layout from "./Layout"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { useState, useEffect } from "react";
import firebaseAppConfig from "../util/firebase-config";
import { getFirestore, addDoc, collection, getDocs } from 'firebase/firestore'
import { onAuthStateChanged, getAuth, } from "firebase/auth";
import Swal from 'sweetalert2'

const db = getFirestore(firebaseAppConfig)
const auth = getAuth(firebaseAppConfig)

const Home = () =>{
    const [products, setProducts] = useState([])

    const [session, setSession] = useState(null)

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if  (user){
                setSession(user)
            } else {
                setSession(null)
            }
        })
    },[])

    useEffect(()=>{
        const req = async () =>{
            const snapshot = await getDocs(collection(db, "products"))
            const tmp = []
            snapshot.forEach((doc) => {
                const allProducts = doc.data() 
                allProducts.id = doc.id
                console.log(allProducts)
                tmp.push(allProducts)
            })
            setProducts(tmp)
        }
        req()
    })


    const addToCart = async (item) =>{
        try {
            item.userId = session.uid
            await addDoc(collection(db,"carts"), item)
            new Swal ( {
                icon : 'success', 
                title : 'Product added !'
            })
        }
        catch(err){
            new Swal ({
                icon : 'error',
                title : 'Failed !',
                text : err.message
            })
        }
    }





    return(
        <Layout>
            <div>
                <header className="shadow-2xl">
                    <Swiper 
                        pagination={true}
                        navigation={true} 
                        modules={[Navigation, Pagination]} 
                        className="mySwiper"
                        style={{
                            zIndex:-1
                        }}
                    >
                        <SwiperSlide>
                            <img src="/images/p1.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/c1.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/p2.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/p3.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/p4.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/p5.jpg" alt="" />
                        </SwiperSlide>
                    </Swiper>
                </header>

                <div className="md:p-16 p-8">
                    <h1 className="text-3xl font-bold text-center">Latest Products</h1>
                    <p className="text-center text-gray-600 md:w-7/12 mx-auto mt-2 mb-16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vel iste minus veritatis assumenda sit.</p>
                    <div className="md:w-10/12 mx-auto grid md:grid-cols-4 gap-2">
                        {
                            products.map((item,index)=>(
                                <div key={index} className="bg-white shadow-lg border">
                                    <img src={item.image ? item.image : '/images/pt.jpg'} alt=""/>
                                    <div className="p-2">
                                        <h1 className="text-lg text-semibold capitalize">{item.title}</h1>
                                        <div className="space-x-2">
                                            <label htmlFor="" className="font-semibold text-lg">Rs.{item.price-(item.price*item.discount)/100}</label>
                                            <del>Rs.{item.price}</del>
                                            <label htmlFor=""> ({item.discount})% </label>
                                        </div>
                                        <button className="bg-green-500 py-2 w-full rounded text-white font-semibold mt-4">Buy Now</button>
                                        <button onClick={()=>addToCart(item)} className="bg-rose-500 py-2 w-full rounded text-white font-semibold mt-2" >
                                            <i className="ri-shopping-cart-line mr-2"></i>
                                            Add to Cart
                                        </button>
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
export default Home

