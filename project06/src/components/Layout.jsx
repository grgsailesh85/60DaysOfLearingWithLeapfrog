import { useState , useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import firebaseAppConfig from '../util/firebase-config'

const auth = getAuth(firebaseAppConfig)

const Layout = ({children}) =>{
    const [open, setOpen] = useState(false)
    const [accountMenu, setAccountMenu] = useState(false)
    const [session, setSession] = useState(null)
    const navigate = useNavigate()

    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if(user){
                setSession(user)
                console.log(user)

            } else {
                setSession(false)
            }
        }) 
    },[])

    const menus = [
        {
            label: 'Home',
            href:'/',
            icon:<i className="ri-home-2-line mr-2"></i>
        },
        {
            label: 'Products',
            href:'/products',
            icon:<i className="ri-product-hunt-line mr-2"></i>
        }, 
        {
            label: 'Category',
            href:'/category',
            icon:<i className="ri-menu-search-line mr-2"></i>
        },
        {
            label: 'Contact Us',
            href:'/contact-us',
            icon:<i className="ri-contacts-line mr-2"></i>
        }
    ]
    const mobileLink = (href) =>{
        setOpen(false)
        navigate(href)
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
        <div>
            <nav className="sticky top-0 left-0 shadow-lg bg-slate-100 z-50">
                <div className="w-11/12 mx-auto flex items-center justify-between">
                    <img 
                        src="/images/logo.png" 
                        alt="" 
                        className="w-[100px]"
                    />

                    <button className='md:hidden' onClick={()=>setOpen(!open)}>
                        <i className="ri-menu-2-line text-3xl"></i>
                    </button>

                    <ul className='md:flex gap-4 items-center hidden'>
                        {
                            menus.map((item,index) =>(
                                <li key={index}>
                                    <Link 
                                        to={item.href}
                                        className='block py-6 text-center hover:bg-blue-600 w-[100px] hover:text-white'
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))
                        }

                        {
                            !session &&
                            <>
                                <Link 
                                    className='block py-6 text-center hover:bg-blue-600 w-[100px] hover:text-white'
                                    to="/login"
                                >
                                    Log In
                                </Link>
                                <Link 
                                    className='bg-blue-600 py-3 px-8 text-md font-semibold text-white block text-center hover:bg-rose-600 hover:text-white'
                                    to="/signup"
                                >
                                    Sign Up
                                </Link>
                            </>
                        }

                        {
                            session &&
                            <button className='relative' onClick={()=>setAccountMenu(!accountMenu)}>
                                <img src={ session.photoURL ? session.photoURL : "/images/avatar.jpg" } alt="" className='w-10 h-10 rounded-full'/>
                                {
                                    accountMenu &&
                                    <div className='flex flex-col items-start animate__animated animate__fadeIn w-[150px] py-3 bg-white absolute top-12 right-0 shadow-xl'>
                                        <Link to="/profile" className='w-full text-left px-3 py-2 hover:bg-gray-100'>
                                            <i className='ri-user-line mr-2'></i>
                                            My Profile
                                        </Link>
                                        <Link to="/cart" className='w-full text-left px-3 py-2 hover:bg-gray-100'>
                                            <i className='ri-shopping-cart-line mr-2'></i>
                                            Cart
                                        </Link>

                                        <button className='w-full text-left px-3 py-2 hover:bg-gray-100' onClick={()=>signOut(auth)}>
                                            <i className='ri-logout-circle-r-line mr-2'></i>
                                            Logout
                                        </button>
                                       

                                    </div>

                                }
                            </button>
                        }
                        
                    </ul>
                </div>
            </nav>

            <div>
                {children}
            </div>

            <footer className='bg-orange-600 py-16'>
                <div className='w-10/12 mx-auto grid md:grid-cols-4 md:gap-0 gap-8'>
                    <div>
                        <h1 className='text-teal-600 font-semibold text-2xl mb-4 '>Website Link</h1>
                        <ul className='space-y-2 text-slate-50'>
                            {
                                menus.map((item, index)=>(
                                    <li key={index}>
                                        {item.icon}
                                        <Link to={item.href}>{item.label}</Link>
                                    </li>
                                ))
                            }
                            <li>
                                <Link to="/login">
                                    <i className="ri-login-box-line mr-2"></i>
                                    Log In
                                </Link>
                            </li>

                            <li>
                                <Link to="/signup">
                                    <i className="ri-pencil-ruler-2-fill mr-2"></i>
                                    Sign Up
                                </Link>
                            </li>

                        </ul>
                    </div>

                    <div>
                        <h1 className='text-teal-600 font-semibold text-2xl mb-4'>Follow Us</h1>
                        <ul className='space-y-2 text-slate-50'>
                            <li><Link to="/">
                                    <i className="ri-facebook-box-line mr-2"></i>
                                    Facebook
                                </Link></li>
                            <li><Link to="/">
                                    <i className="ri-youtube-line mr-2"></i>
                                    Youtube</Link></li>
                            <li><Link to="/">
                                    <i className="ri-twitter-x-line mr-2"></i>
                                    Twitter</Link></li>
                            <li><Link to="/">
                                    <i className="ri-linkedin-box-line mr-2"></i>
                                    Linked In</Link></li>
                            <li><Link to="/">
                                    <i className="ri-instagram-line mr-2"></i>
                                    Instagram</Link></li>

                        </ul>
                    </div>

                    <div className='pr-8'>
                        <h1 className='text-teal-600 font-semibold text-2xl mb-3'>Brand Details</h1>
                        <p className='text-slate-50 mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet. Tenetur !</p>
                        <img 
                            src="/images/logo.png" 
                            alt="" 
                            className="w-[100px] border rounded"
                        />
                    </div>

                    <div>
                        <h1 className='text-teal-600 font-semibold text-2xl mb-4'>Contact Us</h1>
                        <form action="" className='space-y-4'>
                            <input
                                required 
                                type="text"
                                name='fullname'
                                className='bg-white w-full rounded p-3'
                                placeholder='Enter Your FullName' 
                            />

                            <input
                                required 
                                type="email"
                                name='email'
                                className='bg-white w-full rounded p-3'
                                placeholder='Enter Your Email ID' 
                            />

                            <textarea
                                required 
                                name="message" 
                                id=""
                                className='bg-white w-full rounded p-3'
                                placeholder='Message'
                                rows={3}
                            />
                            
                            <button className='bg-black text-white py-3 px-6 rounded'>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </footer>
 
            <aside 
                className='overflow-hidden md:hidden bg-slate-700 shadow fixed top-0 left-0 h-full z-50'
                style={{
                    width:(open ? 300 : 0),
                    transition: '0.3s'
                }}
            > 
                <div className='flex flex-col p-8 gap-6'>
                    {
                        session &&
                        <button className='relative' onClick={()=>setAccountMenu(!accountMenu)}>
                            <div className='flex items-center gap-3'>
                                <img src={ session.photoURL ? session.photoURL : "/images/avatar.jpg" } alt="" className='w-10 h-10 rounded-full'/>
                                <div>
                                    <p className='text-white capitalize text-left'>{session.displayName}</p>
                                    <p className='text-white'>{session.email}</p>
                                </div>
                            </div>
                            {
                                accountMenu &&
                                <div className='flex flex-col items-start animate__animated animate__fadeIn w-[150px] py-3 bg-white absolute top-12 right-0 shadow-xl'>
                                        <Link to="/profile" className='w-full text-left px-3 py-2 hover:bg-gray-100'>
                                            <i className='ri-user-line mr-2'></i>
                                            My Profile
                                        </Link>
                                        <Link to="/cart" className='w-full text-left px-3 py-2 hover:bg-gray-100'>
                                            <i className='ri-shopping-cart-line mr-2'></i>
                                            Cart
                                        </Link>

                                        <button className='w-full text-left px-3 py-2 hover:bg-gray-100' onClick={()=>signOut(auth)}>
                                            <i className='ri-logout-circle-r-line mr-2'></i>
                                            Logout
                                        </button>
                                       

                                </div>
                            }
                        </button>
                    }
                        
                    {
                        menus.map((item,index)=>(
                            <button onClick={()=>mobileLink(item.href)}key={index} className='text-left text-white pl-[4px]'>
                                {item.icon}
                                {item.label}
                            </button>
                        ))
                    }
                </div>
            </aside>
        

            
        </div>
    )
}
export default Layout