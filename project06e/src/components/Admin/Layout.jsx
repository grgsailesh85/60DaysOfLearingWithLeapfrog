import {useState} from 'react'
import {Link, useLocation} from 'react-router-dom'

const Layout = ({children}) =>{
    const [size, setSize] = useState(280)
    const [mobileSize, setMobileSize] = useState(0)
    const [accountMenu, setAccounMenu] = useState(false)
    // This hook is provided by react-router-dom and returns the location object which contains information about the current URL path. We can use this to determine the current route.
    const location = useLocation()

    const menus = [
        {
            label:'DashBoard',
            icon: <i className="ri-dashboard-2-line mr-2"></i>,
            link: '/admin/dashboard'
        },
        {
            label:'Products',
            icon: <i className="ri-shopping-cart-line mr-2"></i>,
            link: '/admin/products'
        },
        {
            label:'Customers',
            icon: <i className="ri-user-line mr-2"></i>,
            link: '/admin/customers'
        },
        {
            label:'Orders',
            icon: <i className="ri-shape-line mr-2"></i>,
            link: '/admin/orders'
        },
        {
            label:'Payments',
            icon: <i className="ri-money-dollar-box-line mr-2"></i>,
            link: '/admin/payments'
        },
        {
            label:'Settings',
            icon: <i className="ri-settings-3-line mr-2"></i>,
            link: '/admin/settings'
        },
    ]

    return(
        <>
            {/* desktop */}
            <div className='md:block hidden'>
                <aside 
                    className="w-[280px] bg-indigo-600 fixed top-0 left-0 h-full overflow-hidden"
                    style={{
                        width: size,
                        transition:'0.3s'
                }}>
                    <div className='flex flex-col'>
                        {
                            menus.map((item, index)=>(
                                <Link 
                                    key={index} 
                                    to={item.link} 
                                    className='px-4 py-3 text-gray-50 text-[17.5px] hover:bg-rose-600 hover:text-white'
                                    style={{
                                        background: (location.pathname == item.link) ? '#E11D48' : 'transparent'
                                    }}
                                >
                                    {item.icon}
                                    {item.label}                      
                                </Link>                               
                             ))
                        }
                        <button 
                            className='px-4 py-3 text-gray-50 text-left text-[17.5px] hover:bg-rose-600 hover:text-white'
                        >
                            <i className="ri-logout-box-line mr-2"></i>
                            LogOut
                        </button>
                    </div>
                </aside>

                <section 
                    className="bg-gray-200 min-h-screen"
                    style={{
                        marginLeft: size,
                        transition:'0.3s'
                    }}>
                        <nav className="bg-white p-6 shadow flex items-center justify-between sticky top-0 left-0">
                            <div className="flex gap-4 items-center">
                                <button 
                                    className="bg-gray-50 hover:bg-indigo-600 hover:text-white w-8 h-8"
                                    onClick={()=>setSize(size === 280 ? 0 : 280)}
                                >
                                    <i className="ri-menu-2-line text-xl"></i>
                                </button>
                                <h1 className="text-md font-semibold">SHOP<span className='text-orange-600 font-extrabold'>_Code</span></h1>
                            </div>

                            <div>
                                <button className='relative'>
                                    <img 
                                        src="/images/avatar.jpg" 
                                        alt="" 
                                        className='w-10 h-10 rounded-full'
                                        onClick={()=>setAccounMenu(!accountMenu)} />
                                    {
                                        accountMenu &&
                                        <div className='absolute top-18 right-0 bg-white shadow-lg w-[300px] p-6'>
                                        <div>
                                            <h1 className='text-lg font-semibold'>Sailesh Gurung</h1>
                                            <p className='text-gray-500'>saileshgurung98@gmail.com</p>
                                            <div className='h-px bg-gray-200 my-4' />
                                            <button>
                                                <i class="ri-logout-box-r-line mr-2"></i>
                                                LogOut
                                            </button>
                                        </div>
                                    </div>
                                    }
                                    
                                </button>
                            </div>
                        </nav>
                        <div className='p-6'>
                            {children}
                        </div>
                </section>
            </div>

            {/* mobile */}
            <div className='md:hidden block'>
                <aside 
                    className="w-[280px] bg-indigo-600 fixed top-0 left-0 h-full z-50 overflow-hidden"
                    style={{
                        width: mobileSize,
                        transition:'0.3s'
                }}>
                    <div className='flex flex-col'>
                        <button 
                            className='text-left mx-4 mt-4'
                            onClick={()=>setMobileSize(mobileSize === 0 ? 280 : 0)}
                        >
                            <i className="ri-menu-2-fill text-white text-xl"></i>
                        </button>
                        {
                            menus.map((item, index)=>(
                                <Link key={index} 
                                    to={item.link} 
                                    className='px-4 py-3 text-gray-50 text-[17.5px] hover:bg-rose-600 hover:text-white'
                                    // If the current path matches the item's link, the background color is set to #E11D48. Otherwise, it remains transparent.
                                    style={{
                                        background: (location.pathname == item.link) ? '#E11D48' : 'transparent'
                                    }}
                                >
                                    {item.icon}
                                    {item.label}                      
                                </Link>
        
                            ))
                        }
                        <button 
                            className='px-4 py-3 text-gray-50 text-left text-[17.5px] hover:bg-rose-600 hover:text-white'>
                            <i className="ri-logout-box-line mr-2"></i>
                            LogOut
                        </button>
                    </div>
                </aside>
                
                <section 
                    className="bg-gray-200 min-h-screen"
                >
                        <nav className="bg-white p-6 shadow flex items-center justify-between sticky top-0 left-0">
                            <div className="flex gap-4 items-center">
                                <button 
                                    className="bg-gray-50 hover:bg-indigo-600 hover:text-white w-8 h-8"
                                    onClick={()=>setMobileSize(mobileSize === 0 ? 280 : 0)}
                                >
                                    <i className="ri-menu-2-line text-xl"></i>
                                </button>
                                <h1 className="text-md font-semibold">SHOP<span className='text-orange-600 font-extrabold'>_Code</span></h1>
                            </div>

                            <div>
                                <button className='relative'>
                                    <img 
                                        src="/images/avatar.jpg" 
                                        alt="" 
                                        className='w-10 h-10 rounded-full'
                                        onClick={()=>setAccounMenu(!accountMenu)} />
                                    {
                                        accountMenu &&
                                        <div className='absolute top-18 right-0 bg-white shadow-lg w-[300px] p-6'>
                                        <div>
                                            <h1 className='text-lg font-semibold'>Sailesh Gurung</h1>
                                            <p className='text-gray-500'>saileshgurung98@gmail.com</p>
                                            <div className='h-px bg-gray-200 my-4' />
                                            <button>
                                                <i class="ri-logout-box-r-line mr-2"></i>
                                                LogOut
                                            </button>
                                        </div>
                                    </div>
                                    }
                                    
                                </button>
                            </div>
                        </nav>
                        <div className='p-6'>
                            {children}
                        </div>
                </section>
            </div>
        </>
    )
}
export default Layout
