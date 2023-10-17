import tshirtsbg from '/images/tshirts-bg.webp';
import sweatshirtsbg from '/images/sweatshirts-bg.webp';
import logo from '/images/medellin-white.png';
import bureal from '/images/bureal.gif';
import stars from '/images/stars.webp';
import blob1 from '/images/blob1.webp';
import blob2 from '/images/blob2.webp';

const PreFooter = () => {
  return (
    <div className="bg-[#0e0e0e] -z-10">
      <div className="max-w-7xl mx-auto relative p-20 overflow-hidden">
        <div className='flex gap-5'>
          <div className='skew-y-6 w-1/2 flex flex-col justify-between relative'>
            <img src={tshirtsbg} alt="Camisetas" className='' />
            <div className='-skew-y-6 absolute bottom-32 left-10'>
              <img src={blob1} alt="blob" className='-rotate-45' />
              <p className='absolute bottom-20 left-1 font-hubba-oblique text-4xl'>Camisetas</p>
            </div>
            <div className='-skew-y-6 flex gap-12 items-center'>
              <img src={stars} alt="stars" className='w-16' />
              <p className='text-white text-4xl font-light'>Veja mais</p>
            </div>
          </div>

          <div className=' space-y-10 w-1/2 flex flex-col items-center z-20'>
            <img src={logo} alt="Logo Medellin" className='w-56' />
            <div className='skew-y-6 relative'>
              <img src={sweatshirtsbg} alt="Moletons" className='' />
              <div className='-skew-y-6 absolute bottom-0 right-7'>
                <img src={blob2} alt="blob" className='-rotate-[220deg] w-32' />
                <p className='absolute bottom-11 left-5 font-hubba-oblique text-4xl'>Moletons</p>
              </div>
            </div>
          </div>

        </div>
        <img src={bureal} alt="bureal" className='absolute -top-12 right-32 w-96 z-10' />
        <img src={bureal} alt="bureal" className='absolute -bottom-24 right-32 w-96 rotate-180 z-10' />
      </div>
    </div>
  )
}

export default PreFooter