import model from '/images/banner_placeholder.webp'
import logo from '/images/medellin-black.png'

const Offers = () => {
  return (
    <section className="max-w-7xl mx-auto my-16 space-y-9">
      <h2 className="font-hubba-oblique text-5xl">Ofertas</h2>
      <div className='flex items-start justify-evenly'>
        <div className="grid grid-cols-2 gap-3 grid-rows-2 h-[450px]">
          <div className='row-span-2'>
            <img src={model} alt="" className='w-80 h-full object-cover'/>
          </div>
          <div>
            <img src={model} alt="" className='w-80 h-full object-cover'/>
          </div>
          <div>
            <img src={model} alt="" className='w-80 h-full object-cover'/>
          </div>
        </div>

        <div className='space-y-10'>
          <img src={logo} alt="Logo Medellin" className='w-28'/>
          <p className='font-zing text-3xl text-center'>
            Produto <br />
            Original, <br />
            Estilo <br />
            Original.
          </p>
        </div>
      </div>

    </section>
  )
}

export default Offers