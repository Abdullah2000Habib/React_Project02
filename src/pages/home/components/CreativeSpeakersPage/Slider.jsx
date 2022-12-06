import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import { Autoplay } from 'swiper';
import 'swiper/css';
import CreativeSpeakers from '../../../../design-system/components/CreativeSpeakers/CreativeSpeakers';
import speakerData from '../../../../design-system/components/CreativeSpeakers/Data';

export default function Slider() {
  return (
<Swiper
        autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                }}

        modules={[Autoplay]}
        spaceBetween={100}
        slidesPerView={4}

    >

        {speakerData.map((item)=>{
            

            return  <SwiperSlide key={item.id}>
                <CreativeSpeakers  img={item.img} alt={item.alt} job={item.job} name={item.name}/>
            </SwiperSlide>
        })}



       


</Swiper>
  )
}
