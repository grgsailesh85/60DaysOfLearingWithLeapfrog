import { useState, useRef } from "react"
import Layout from "./Layout"
import firebaseAppConfig from "../../util/firebase-config"
import { getFirestore, addDoc, collection } from "firebase/firestore"
import Swal from "sweetalert2"

const db = getFirestore() 

const Products =()=>{
    const modal = {
        title : '',
        description : '',
        price : '',
        discount : ''
    }
    const [products , setProducts] = useState([])
    const [productForm, setProductForm] =  useState(modal)
    const [productModel, setProductModel] = useState(false)
    const [applyCloseAnimation, setApplyCloseAnimation] = useState(false)
     
    const handleModelClose = ()=>{
        setApplyCloseAnimation(true)
        setTimeout(()=>{
            setProductModel(false)
        }, 700)
    }

    const handleModelOpen = ()=>{
        setApplyCloseAnimation(false)
        setProductModel(true)
    }

    const handleProductForm = (e)=>{
        const input = e.target
        const name = input.name
        const value = input.value
        setProductForm({
            ...productForm,
            [name] : value
        })
    }

    const createProduct = async (e)=>{
        try{
            e.preventDefault()
            await addDoc(collection(db,"products"),productForm)
            setProductForm(modal)
            handleModelClose()
            new Swal ({
                icon : 'success',
                title : 'Product Added'
            })
        }
        catch(err){
            new Swal({
                icon : 'error',
                title : 'Failed !',
                text : err.message
            })
        }
    }

    return(
        <Layout>
            <div>
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-semibold mb-4">Products</h1>
                    <button className="bg-indigo-600 text-white rounded py-2 px-4" onClick={handleModelOpen}>
                        <i className="ri-sticky-note-add-line mr-2"></i>
                        New Product
                    </button>
                </div>

                <div className="grid grid-cols-4 gap-2">
                    {
                        products.map((item,index)=>(
                            <div key={index} className="bg-white shadow-lg rounded-md">
                                <img 
                                    src={item.images} 
                                    alt=""
                                    className="rounded-t-md h-[270px] w-full object-cover"

                                />
                                <div className="p-4">
                                    <h1 className="text-lg capitalize font-semibold">{item.title}</h1>
                                    <p className="text-gray-600">{item.description.slice(0,50)}</p>
                                    <div className="flex gap-1 mt-1">
                                        <p>Rs{item.price-(item.price*item.discount)/100}</p>
                                        <del>Rs{item.price}</del>
                                        <label className="text-gray-600"> ({item.discount}% Off) </label>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                {
                    productModel &&
                    <div className={`animate__animated ${applyCloseAnimation ? 'animate__fadeOut' : 'animate__fadeIn'} bg-black bg-opacity-80 absolute top-0 left-0 w-full h-full flex justify-center items-center`}>
                        <div className={`animate__animated ${applyCloseAnimation ? 'animate__zoomOut' : 'animate__zoomIn'} animate__faster bg-white w-5/12 py-5 px-6 rounded-md border border-1 relative`}>
                            <button className="absolute top-2 right-3" onClick={handleModelClose}>
                                <i className="ri-close-line text-lg"></i>
                            </button>
                            <h1 className="text-lg font-semibold">Add a Product</h1>
                            <form action="" className="grid grid-cols-2 mt-4 gap-6" onSubmit={createProduct}>
                                <input 
                                    type="text"
                                    name="title"
                                    placeholder="Enter product title here" 
                                    className="p-2 border border-gray-300 rounded col-span-2"
                                    onChange={handleProductForm}
                                    value = {productForm.title}
                                />
                                <input 
                                    type="number"
                                    name="price"
                                    placeholder="Price" 
                                    className="p-2 border border-gray-300 rounded"
                                    onChange={handleProductForm}
                                    value = {productForm.price}
                                />
                                <input 
                                    type="text"
                                    name="discount"
                                    placeholder="Discount" 
                                    className="p-2 border border-gray-300 rounded"
                                    onChange={handleProductForm}
                                    value={productForm.discount}
                                />
                                <textarea
                                    required
                                    name="description"
                                    placeholder="Description" 
                                    className="p-2 border border-gray-300 rounded col-span-2"
                                    rows={8}
                                    onChange={handleProductForm}
                                    value={productForm.description}
                                />

                                <div>
                                    <button className="bg-indigo-600 text-white rounded px-4 py-2">
                                        Submit
                                    </button>
                                </div>
                            
                            </form>
                        </div>
                    </div>
                }

                
            </div>
        </Layout>
    )
}
export default Products