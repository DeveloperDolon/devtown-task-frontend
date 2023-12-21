// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "./style.css"
import FeaturedItems from '../components/FeaturedItems';
import MobileAnimation from '../components/MobileAnimation';
const Home = () => {
    return (
        <div>

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                // autoplay={{
                //     delay: 4000,
                //     disableOnInteraction: false,
                // }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper w-[calc(100vw-17px)] mx-auto h-[calc(100vh-76px)] relative"
            >
                <SwiperSlide>
                    <div className='absolute md:top-[35%] top-10 sm:left-28 left-6'>

                        <div>
                            <div className='deal-box p-5 text-white rounded-lg mb-5 md:text-2xl text-lg font-bold w-fit'>
                                <h1>Mega Deal</h1>
                            </div>

                            <h1 className='md:text-6xl text-4xl font-bold  text-white pb-7'>
                                Offer up to 50%
                            </h1>
                            <button className='btn btn-primary'>Buy Now</button>
                        </div>
                    </div>

                    <img className='w-full h-full' src="https://images.samsung.com/is/image/samsung/assets/us/12172023/Fold5_Dec_Offer_ETI_Cyber_Week_HP-Hero-Carousel-DT-1440x640.jpg?imwidth=1366" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <div className='absolute md:top-[35%] top-10 sm:left-28 left-6'>
                        <div className='deal-box p-5 text-white rounded-lg mb-5 md:text-2xl text-lg font-bold w-fit'>
                            <h1>Mega Deal</h1>
                        </div>

                        <h1 className='md:text-6xl text-4xl font-bold  text-white pb-7'>
                            Offer up to 55%
                        </h1>
                        <button className='btn btn-primary'>Buy Now</button>
                    </div>
                    <img className='w-full h-full' src="https://images.samsung.com/is/image/samsung/assets/bd/2307/home/default-HOME_Q5_MX-KV_1440X810_pc.jpg?$1440_810_JPG$" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <div className='absolute md:top-[35%] top-10 sm:left-28 left-6'>
                        <div className='deal-box p-5 text-white rounded-lg mb-5 md:text-2xl text-lg font-bold w-fit'>
                            <h1>Mega Deal</h1>
                        </div>

                        <h1 className='md:text-6xl text-4xl font-bold  text-white pb-7'>
                            Offer up to 40%
                        </h1>
                        <button className='btn btn-primary'>Buy Now</button>
                    </div>
                    <img className='w-full h-full' src="https://fdn.gsmarena.com/imgroot/static/headers/makers/apple-2023-1.jpg" alt="" />
                </SwiperSlide>
            </Swiper>

            <div className="container mx-auto md:px-0 sm:px-5 px-3">
                <FeaturedItems></FeaturedItems>
            </div>

            <div className="container mx-auto md:px-0 sm:px-5 px-3">
                <MobileAnimation></MobileAnimation>
            </div>
        </div>
    );
};

export default Home;