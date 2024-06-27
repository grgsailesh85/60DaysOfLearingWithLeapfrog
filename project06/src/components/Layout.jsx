import {Link} from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'

const Layout = ({children}) =>{
    const menus = [
        {
            label: 'Home',
            href:'/'
        },
        {
            label: 'Products',
            href:'/products'
        },
        {
            label: 'Category',
            href:'/category'
        },
        {
            label: 'Contact Us',
            href:'/contact-us'
        }
    ]
    return(
        <div>
            <nav className="sticky top-0 left-0 shadow-lg bg-slate-100">
                <div className="w-10/12 mx-auto flex items-center justify-between">
                    <img 
                        src="/images/logo.png" 
                        alt="" 
                        className="w-[100px]"
                    />

                    <ul className='flex gap-4 items-center'>
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
                    </ul>
                </div>
            </nav>

            <div>
                {children}
            </div>

            <footer className='bg-orange-600 py-16'>
                <div className='w-10/12 mx-auto grid grid-cols-4'>
                    <div>
                        <h1 className='text-white font-semibold text-2xl'>Website Link</h1>
                        <ul className='space-y-2 text-slate-50'>
                            {
                                menus.map((item, index)=>(
                                    <li key={index}>
                                        <Link to={item.href}>{item.label}</Link>
                                    </li>
                                ))
                            }
                            <li><Link to="/login">Log In</Link></li>
                            <li><Link to="/signup">Sign Up</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h1 className='text-white font-semibold text-2xl'>Follow Us</h1>
                        <ul className='space-y-2 text-slate-50'>
                            <li><Link to="/">Facebook</Link></li>
                            <li><Link to="/">Youtube</Link></li>
                            <li><Link to="/">Twitter</Link></li>
                            <li><Link to="/">Linked In</Link></li>
                            <li><Link to="/">Instagram</Link></li>

                        </ul>
                    </div>

                    <div className='pr-8'>
                        <h1 className='text-white font-semibold text-2xl mb-3'>Brand Details</h1>
                        <p className='text-slate-50 mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet. Tenetur !</p>
                        <img 
                            src="/images/logo.png" 
                            alt="" 
                            className="w-[100px]"
                        />
                    </div>

                    <div>
                        <h1 className='text-white font-semibold text-2xl'>Contact Us</h1>
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
        </div>
    )
}
export default Layout