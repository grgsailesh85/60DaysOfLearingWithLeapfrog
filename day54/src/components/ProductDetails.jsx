import { useSelector } from "react-redux"
const ProductDetails = () =>{
    const { productSlice } = useSelector((res)=>res)


    if(productSlice)
        return(
            <h1>Data Not Available in redux store</h1>
        )
    return(
        <div className="bg-gray-200 min-h-screen flex justify-center items-center">
            <div className="bg-white rounded-lg p-12 shadow-lg border w-6/12 space-y-6">
                <img 
                    src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" 
                    alt=""
                    className="w-[70%] mx-auto" 
                />
                <h1 className="font-bold text-6xl">Fjallraven - Foldsack No. 1 Backpack</h1>
                <p className="text-gray-500">
                    Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday
                </p>
                <label htmlFor="" className="bg-blue-600 px-6 py-2 rounded text-white capitalize font-semibold">
                    men's clothing
                </label>
                <button className="bg-rose-600 px-6 py-2 rounded text-white font-semibold ml-6">Buy Now</button>
            </div>
        </div>
    )
}
export default ProductDetails
