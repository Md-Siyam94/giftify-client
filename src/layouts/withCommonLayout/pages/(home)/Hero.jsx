import BannerImage from "../../../../assets//top-view-father-s-day-presents-with-copy-space.jpg"
import Slider1 from "../../../../assets/6158295.jpg"
import Slider2 from "../../../../assets/6230545.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation, Mousewheel } from 'swiper/modules';

const Hero = () => {
    return (
        <div
  className="hero min-h-[calc(100vh-30vh)]"
  style={{
    backgroundImage: `url(${BannerImage})`,
  }}>
  <div className=" hero-overlay"></div>
  <div className="hero-content  text-center">
    <div className=" w-full ">
    <Swiper
                style={{ width: '100%', height: '450px' , borderRadius: '20px'}}
                loop={true}
                spaceBetween={30}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}

                pagination={{
                    dynamicBullets: true,

                }}
                className="mySwiper"
            >
                <div className='h-full '>
                    <SwiperSlide >
                        <img className='h-full w-full relative object-cover ' src={Slider1} alt="" />
                        {/* <p className='font-semibold text-2xl absolute'>Arabic Language</p> */}
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='h-full w-full object-cover ' src={Slider2} alt="" />
                    </SwiperSlide>
                    {/* <SwiperSlide>
                        <img className='h-full w-full object-cover ' src={Bangla} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='h-full w-full object-cover ' src={Korean} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='h-full w-full object-cover ' src={Turkish} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='h-full w-full object-cover ' src={Russian} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='h-full w-full object-cover ' src={German} alt="" />
                    </SwiperSlide> */}

                </div>

            </Swiper>
    </div>
    {/* <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-violet-600">Send Virtual Gifts <span className="">With Love</span></h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
     
    </div> */}
  </div>
</div>
    );
};

export default Hero;