import herobg from '/images/hero_bg.webp';
import colombia from '/images/colombia.png';
import logo from '/images/medellin-white.png'

const Hero = () => {
  return (
    <section className="relative">
        <img src={herobg} alt="Banner Landing Page" className="h-[calc(100vh-112px)] w-full object-cover brightness-75"/>

        <div className="absolute bottom-0 top-0">
          <div className="px-20 py-32">
            <div className="absolute mx-10 my-32 space-y-3 w-max drop-shadow-2xl text-white z-10">
              <p className="text-3xl">
                Mostre seu estilo com
              </p>
              <img src={logo} className="w-56 mx-5" />
            </div>
            <img src={colombia} alt="colombia" className="w-80 opacity-70"/>
          </div>
        </div>
      </section>
  )
}

export default Hero