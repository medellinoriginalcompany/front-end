import { Swiper, SwiperSlide } from 'swiper/react'

import model from '/images/banner_placeholder.webp'
import 'swiper/css'
import 'swiper/css/scrollbar';

type Props = {
  url: string,
}

const Images = (props: Props) => {

  return (
    <div className="flex gap-4 lg:h-[672px] w-full">
      <Swiper
        className="cursor-pointer pr-3"
        slidesPerView={3}
        spaceBetween={50}
        direction={'vertical'}
        scrollbar={{ draggable: true }}>
        <SwiperSlide>
          <img src={model} alt="model" className="md:w-80 xl:w-96 md:h-56 object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={model} alt="model" className="md:w-80 md:h-56 object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={model} alt="model" className="md:w-80 md:h-56 object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={model} alt="model" className="md:w-80 md:h-56 object-cover" />
        </SwiperSlide>
      </Swiper>
      <div className="w-full">
        <img src={props.url} alt="model" className="w-full h-full object-cover" />
      </div>
    </div>
  )
}

export default Images