import HeroGrid from './HeroGrid';
import HeroGridItem from './HeroGridItem';

import herobg from '/images/hero_bg.webp';
import colombia from '/images/colombia.png';
import logo from '/images/medellin-white.png';


const Hero = () => {
  return (
    <section className="relative">
      <img src={herobg} alt="Banner Landing Page" className="h-[calc(100vh-112px)] w-full object-cover brightness-75" />

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
          <HeroGridItem icon='cards' text='Até 10x sem juros' />
          <HeroGridItem icon='truck-fast' text='Entrega para todo Brasil' />
          <HeroGridItem icon='3d-rotate' text='Troca Grátis' />
        </HeroGrid>
      </div>
    </section>
  )
}

export default Hero