import { useEffect, useState } from "react"
import firebaseAppConfig from "../util/firebase-config"
import { onAuthStateChanged, getAuth, updateProfile} from "firebase/auth"
import { useNavigate } from "react-router-dom"
import Layout from "./Layout"
import Swal from 'sweetalert2'
import { getFirestore, collection, addDoc, getDocs, query , where, updateDoc, doc } from 'firebase/firestore'
import uploadFile from "../util/storage"

const auth = getAuth(firebaseAppConfig)
const db = getFirestore(firebaseAppConfig)




const Profile = () =>{

    const [uploading, setUploading] = useState(false)
    const navigate = useNavigate()
    const [session,setSession] = useState(null)
    const [formValue, setFormValue] = useState({
        fullname: '',
        email:'',
        mobile:'',
        // address:'',
        // city:'',
        // state:'',
        // country:'',
        // pincode:''
    })
    const [isAddress, setIsaddress] = useState(false)

    const [docId, setDocID] = useState(null)

    const [isUpdated, setIsUpdated] = useState(false)

    const [addressForm, setAddressForm] = useState({
        address:'',
        city:'',
        state:'',
        country:'',
        pincode:'',
        userId: ''
    })

    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if(user){
                setSession(user)
            } else {
                setSession(false)
                navigate('/login')
            }
        })
    }, [])

    useEffect(()=>{
        const req = async () =>{
            if(session) {
                setFormValue({
                    ...formValue,
                    fullname : session.displayName,
                    mobile : (session.phoneNumber ? session.phoneNumber : '')
                })
    
                setAddressForm({
                    ...addressForm,
                    userId: session.uid 
                })
    
                //fetch address
                const col = collection(db, "addresses")
                const q = query(col, where("userId", "==", session.uid))
                const snapshot = await getDocs(q)

                setIsaddress(!snapshot.empty)
                
                snapshot.forEach((doc)=>{
                    setDocID(doc.id)
                    const address = doc.data()
                    setAddressForm({
                        ...addressForm,
                        ...address
                    })
                })
            }
        }
        req()
    },[session , isUpdated])
    

    const setProfilePicture = async (e) =>{
        const input = e.target
        const file = input.files[0]
        const filenameArray = file.name.split('.')
        const ext = filenameArray[filenameArray.length-1]
        const filename =Date.now() + '.' + ext
        const path = `pictures/${filename}`
        setUploading(true)
        const url = await uploadFile(file,path)
        await updateProfile(auth.currentUser,{
            photoURL : url
        })
        setUploading(false)
        setSession({
            ...session,
            photoURL:url
        })
       
    }

    const handleFormValue = (e) =>{
        const input = e.target   
        const name = input.name 
        const value = input.value 
        setFormValue({
            ...formValue,
            [name]: value
        })   
    }

    const saveProfileInfo = async (e) =>{
        e.preventDefault()
        await updateProfile(auth.currentUser , {
            displayName:formValue.fullname,
            phoneNumber:formValue.mobile
        })
        new Swal ({
            icon:'success',
            title : 'Profile Saved'
        })
    }

    const handleAddressForm = (e) =>{
        const input = e.target
        const name = input.name
        const value = input.value
        setAddressForm({
            ...addressForm,
            [name] : value
        })

    }

    const setAddress = async (e) =>{
        try{
            e.preventDefault()
            await addDoc(collection(db, "addresses"), addressForm)
            setIsaddress(true)
            setIsUpdated(!isUpdated)
            new Swal ({
                icon : 'success',
                title: 'Address Saved !'
            })
        }
        catch(err){
            console.log(err)
            new Swal ({
                icon: 'error',
                title : 'Failed !',
                text: err.message
            })
        }
    }

    const updateAddress = async (e) =>{
        try{
            e.preventDefault()
            const ref = doc(db, "addresses",docId)
            await updateDoc(ref, addressForm)
            new Swal({
                icon:'success',
                title: 'Address Updated !' 

            })
        }
        catch(err){
            new Swal ({
                icon: 'error',
                title : 'Failed !',
                text: err.message
            })
        }

    }

    if (session === null)
        return(
            <div className='bg-gray-100 h-full fixed top-0 left-0 w-full flex justify-center items-center'>
                <span className="relative flex h-6 w-6">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-6 w-6 bg-sky-500"></span>    
                </span>
            </div>
        )

    return(
        <Layout>
            <div className="mx-auto md:my-16 shadow-lg rounded-md p-8 md:w-7/12 border">
                <div className="flex gap-3">
                    <i className="ri-user-line text-4xl"></i>
                    <h1 className="text-3xl font-semibold">Profile</h1>
                </div>

                <hr className="my-6"/>

                <div className="w-24 h-24 mx-auto relative mb-6">
                    {
                        uploading ?
                        <img src="/images/animation.gif" alt="" className="rounded-full w-24 h-24"/>
                        :
                        <img src={session.photoURL ? session.photoURL : "/images/avatar.jpg"} alt="" className="rounded-full w-24 h-24"/>
                    }
                    <input type="file" accept="image/*" className="opacity-0 absolute top-0 left-0 w-full h-full" onChange={setProfilePicture}/>
                </div>


                <form action="" className="grid grid-cols-2 gap-6" onSubmit={saveProfileInfo}>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-lg font-semibold">Full Name</label>
                        <input 
                            onChange={handleFormValue}
                            required
                            type="text"
                            name="fullname"
                            className="p-2 rounded border border-gray-300" 
                            value={formValue.fullname}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-lg font-semibold">Email</label>
                        <input
                            disabled
                            readOnly
                            onChange={handleFormValue}
                            required
                            type="email"
                            name="email"
                            className="p-2 rounded border border-gray-300" 
                            value={session.email}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-lg font-semibold">Mobile</label>
                        <input 
                            onChange={handleFormValue}
                            required
                            type="number"
                            name="mobile"
                            className="p-2 rounded border border-gray-300" 
                            value={formValue.mobile}
                        />    
                    </div>

                    <div/>

                    <button className="px-8 py-2 bg-rose-600 text-white rounded w-fit hover:bg-green-600 mt-6">
                        <i className="ri-save-line mr-2"></i>
                        Save
                    </button>



                </form>
            </div>

            <div className="mx-auto md:my-16 shadow-lg rounded-md p-8 md:w-7/12 border">
                <div className="flex gap-3">
                    <i className="ri-link-unlink-m text-4xl"></i>
                    <h1 className="text-3xl font-semibold">Delivery Address</h1>
                </div>

                <hr className="my-6"/>

                <form action="" className="grid grid-cols-2 gap-6" onSubmit={isAddress ? updateAddress : setAddress}>
                    <div className="flex flex-col gap-2 col-span-2">
                        <label htmlFor="" className="text-lg font-semibold">Area/Street/Villa</label>
                        <input 
                            onChange={handleAddressForm}
                            required
                            type="text"
                            name="address"
                            className="p-2 rounded border border-gray-300" 
                            value={addressForm.address}
                        />    
                    </div> 

                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-lg font-semibold">City</label>
                        <input 
                            onChange={handleAddressForm}
                            required
                            type="text"
                            name="city"
                            className="p-2 rounded border border-gray-300" 
                            value={addressForm.city}

                        />    
                    </div> 

                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-lg font-semibold">State</label>
                        <input 
                            onChange={handleAddressForm}
                            required
                            type="text"
                            name="state"
                            className="p-2 rounded border border-gray-300" 
                            value={addressForm.state}
                        />    
                    </div> 

                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-lg font-semibold">Country</label>
                        <input 
                            onChange={handleAddressForm}
                            required
                            type="text"
                            name="country"
                            className="p-2 rounded border border-gray-300" 
                            value={addressForm.country}
                        />    
                    </div> 

                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-lg font-semibold">PinCode</label>
                        <input 
                            onChange={handleAddressForm} 
                            required
                            type="number"
                            name="pincode"
                            className="p-2 rounded border border-gray-300" 
                            value={addressForm.pincode}
                        />    
                    </div> 

                    {
                        isAddress ? 
                        <button className="px-8 py-2 bg-rose-600 text-white rounded w-fit hover:bg-green-600 mt-6">
                            <i className="ri-save-line mr-2"></i>
                            Save
                        </button>
                        :
                        <button className="px-8 py-2 bg-green-500 text-white rounded w-fit hover:bg-green-600 mt-6">
                            <i className="ri-save-line mr-2"></i>
                            Submit
                        </button>
                    }

                </form>
                <div className=" ">
                </div>
            </div>   
        </Layout>
    )
}
export default Profile
