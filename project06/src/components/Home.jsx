import Layout from "./Layout"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import { Navigation, Pagination } from 'swiper/modules';
const Home = () =>{
    return(
        <Layout>
            <div>
                <header>
                    <Swiper 
                        pagination={true}
                        navigation={true} 
                        modules={[Navigation, Pagination]} 
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src="/images/p1.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/c1.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/p2.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/p3.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/p4.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/p5.jpg" alt="" />
                        </SwiperSlide>
                    </Swiper>
                </header>
            </div>
        </Layout>
    )
}
export default Home

