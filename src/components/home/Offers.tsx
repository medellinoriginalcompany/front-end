import model11 from '/images/model11.webp'
import model12 from '/images/model12.webp'
import model13 from '/images/model13.webp'
import logo from '/images/medellin-black.png'

const Offers = () => {
  return (
    <section className="max-w-7xl mx-auto my-16 space-y-9">
      <h2 className="font-hubba-oblique text-5xl">Ofertas</h2>
      <div className='flex items-start justify-evenly'>
        <div className="grid grid-cols-2 gap-3 grid-rows-2 h-[450px]">
          <div className='row-span-2'>
            <img src={model11} alt="" className='w-80 h-full object-cover'/>
          </div>
          <div>
            <img src={model13} alt="" className='w-80 h-full object-cover'/>
          </div>
          <div>
            <img src={model12} alt="" className='w-80 h-full object-cover'/>
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