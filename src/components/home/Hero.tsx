import HeroGrid from './HeroGrid';
import HeroGridItem from './HeroGridItem';
import { Swiper, SwiperSlide } from 'swiper/react';

import herobg from '/images/hero_bg.webp';
import herobg2 from '/images/hero_bg2.webp';
import colombia from '/images/colombia.png';
import logo from '/images/medellin-white.png';


const Hero = () => {
  return (
    <section className="relative">
      <Swiper
        className='-z-10'
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop>
        <SwiperSlide>
          <img src={herobg} alt="Banner Landing Page" className="h-[calc(100vh-112px)] w-full object-cover brightness-75" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={herobg2} alt="Banner Landing Page" className="h-[calc(100vh-112px)] w-full object-cover brightness-75" />
        </SwiperSlide>
      </Swiper>

      <div className="absolute bottom-0 top-0">
        <div className="lg:px-16 lg:py-14 2xl:px-20 2xl:py-32">
          <div className="absolute mx-10 my-32 space-y-3 w-max drop-shadow-2xl text-white z-10">
            <p className="lg:text-2xl 2xl:text-3xl">
              Mostre seu estilo com
            </p>
            <img src={logo} className="lg:w-44 2xl:w-56 mx-5" />
          </div>
          <img src={colombia} alt="colombia" className="lg:w-72 2xl:w-80 opacity-70 transition-all" />
        </div>
      </div>
      <div className='bg-neutral-300'>
        <HeroGrid>
          <HeroGridItem icon='cards' text='Até 5x sem juros' />
          <HeroGridItem icon='truck-fast' text='Entrega para todo Brasil' />
          <HeroGridItem icon='3d-rotate' text='Troca Grátis' />
        </HeroGrid>
      </div>
    </section>
  )
}

export default Hero