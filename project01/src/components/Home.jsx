import Nav from "./Nav";
import Footer from "./Footer";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
const Home= () =>{
    return(
        <div>
            <Nav/>
                <div>
                    <header className="grid grid-cols-2 p-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                        <div>
                        <img 
                            src="./images/students.jpg"    
                            alt="" 
                            className="w-3/4 rounded-full animate__animated animate__pulse border border-2 shadow-2xl animate__animated animate__fadeIn"
                        />
                        </div>
                        <div className="flex flex-col gap-8 justify-center">
                            <h1 className="text-7xl font-bold text-white">"Say Hello!"</h1>
                            <p className="text-2xl font-semi-bold">Enjoy Complete Digital Learning experience with Sailesh Gurung, a Software Engineer</p>
                            <div className="flex gap-6">
                                <button className="bg-[#100d22] text-white px-12 py-4 rounded-md text-lg font-semibold hover:bg-orange-600">Learn More</button>
                                <button className="border border-2 border-[#100d22] text-[#100d22] px-12 py-4 rounded-md text-lg font-semibold">Watch Video</button>
                            </div>
                        </div>
                    </header>

                    <div className="p-24">
                        <h1 className="text-center text-4xl font-bold">Benefits and Advantages</h1>
                        <p className="text-gray-600 text-center mt-4 text-lg"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores id reiciendis est sunt aliquam quod eveniet assumenda architecto consectetur nemo! </p>
                        <div className="w-11/12 mx-auto mt-12 grid grid-cols-3 gap-8">
                            <div className="shadow-lg border rounded-md p-4 text-center">
                                <i className="ri-artboard-line text-6xl"></i>
                                <h1 className="text-2xl font-semibold mb-2">Great faculty</h1>
                                <p className="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. A quas consectetur culpa?</p>
                            </div>
                            <div className="shadow-lg border rounded-md p-4 text-center">
                                <i className="ri-edit-box-line text-6xl"></i>
                                <h1 className="text-2xl font-semibold mb-2">Latest Curriculum</h1>
                                <p className="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. A quas consectetur culpa?</p>
                            </div>
                            <div className="shadow-lg border rounded-md p-4 text-center">
                                <i className="ri-tree-line text-6xl"></i>
                                <h1 className="text-2xl font-semibold mb-2">Green Environment</h1>
                                <p className="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. A quas consectetur culpa?</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 p-12">
                        <div>
                            <Swiper navigation={true} modules={[Navigation]} className="w-8/12">
                                    <SwiperSlide>
                                        <img src="./images/s1.jpg" alt="" className="w-full"/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./images/s2.jpg" alt="" className="w-full"/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./images/s3.jpg" alt="" className="w-full"/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./images/s4.jpg" alt="" className="w-full"/>
                                    </SwiperSlide>
                                </Swiper>
                        </div>

                        <div className="flex flex-col gap-8 justify-center">                                
                            <h1 className="text-7xl font-bold">"Say Hello!"</h1>
                            <p className="text-2xl font-semi-bold">Enjoy Complete Digital Learning experience with Sailesh Gurung, a Software Engineer</p>
                            <div className="flex gap-6">
                                <button className="bg-[#100d22] text-white px-12 py-4 rounded-md text-lg font-semibold hover:bg-orange-600">Learn More</button>
                                <button className="border border-2 border-[#100d22] text-[#100d22] px-12 py-4 rounded-md text-lg font-semibold">Watch Video</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            <Footer/>
        </div>
    )
}
export default Home;