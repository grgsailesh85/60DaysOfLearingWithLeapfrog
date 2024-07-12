import { useEffect, useState } from "react"
import firebaseAppConfig from "../util/firebase-config"
import { onAuthStateChanged, getAuth, updateProfile} from "firebase/auth"
import { getDownloadURL, getStorage, ref, uploadBytes} from "firebase/storage"
import { useNavigate } from "react-router-dom"
import Layout from "./Layout"
import Swal from 'sweetalert2'

const auth = getAuth(firebaseAppConfig)

const storage = getStorage()
const bucket = ref(storage, 'picture')


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
        if(session) {
            setFormValue({
                ...formValue,
                fullname : session.displayName,
                mobile : (session.phoneNumber ? session.phoneNumber : '')
            })
        }
    },[session])

    const setProfilePicture = async (e) =>{
        const input = e.target
        const file = input.files[0]
        const filenameArray = file.name.split('.')
        const ext = filenameArray[filenameArray.length-1]
        const filename =Date.now() + '.' + ext
        const path = `pictures/${filename}`
        const bucket = ref(storage, path)
        setUploading(true)
        const snapshot = await uploadBytes(bucket,  file)
        const url = await getDownloadURL(snapshot.ref)
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


                <form action="" className="grid grid-cols-2" onSubmit={saveProfileInfo}>
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

            
        </Layout>
    )
}
export default Profile