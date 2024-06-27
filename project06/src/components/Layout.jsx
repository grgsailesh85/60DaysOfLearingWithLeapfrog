import {Link} from 'react-router-dom'
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
                        className="w-[150px]"
                    />

                    <ul className='flex gap-4 items-center'>
                        {
                            menus.map((item,index) =>(
                                <li key={index}>
                                    <Link 
                                        to={item.href}
                                        className='block py-6 text-center hover:bg-blue-600 w-[100px] hover:text-white'
                                    >{item.label}</Link>
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
                            className='bg-blue-600 py-3 px-8 text-md font-semibold rounded text-white block text-center hover:bg-rose-600 hover:text-white'
                            to="/signup"
                        >
                            Sign Up
                        </Link>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default Layout