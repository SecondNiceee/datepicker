import { Swiper, SwiperSlide, coverflowEffect} from 'swiper/react';

//  Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, FreeMode , EffectCoverflow} from 'swiper/modules';

export default () => {
  return (
    <Swiper
    // direction={'vertical'}
    modules={[Navigation, Pagination, Scrollbar, A11y, FreeMode, EffectCoverflow ]}
     direction='vertical'
        freeMode = {{enabled : true , sticky : true, minimumVelocity : 0.5}}
      spaceBetween={'20px'}
        slidesPerView={3}
        effect= {'coverflow'}
      coverflowEffect={{depth : 0 , modifier:1, rotate : 10 , scale : 1,stretch: 0}}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide></SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>    
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
  );
};