import {useState} from 'react'
const Admin = () =>{
    const [size, setSize] = useState(280)
    const [accountMenu, setAccounMenu] = useState(false)

    return(
        <div>
            <aside 
                className="w-[280px] bg-indigo-600 fixed top-0 left-0 h-full"
                style={{
                    width:size,
                    transition:'0.3s'
                }}>

            </aside>
            <section 
                className="bg-gray-100 h-screen"
                style={{
                    marginLeft: size,
                    transition:'0.3s'
                }}>
                    <nav className="bg-white p-6 shadow flex items-center justify-between">
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
                                    src="./images/avatar.jpg" 
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
            </section>
        </div>
    )
}
export default Admin