import tshirtsbg from '/images/tshirts-bg.webp';
import sweatshirtsbg from '/images/sweatshirts-bg.webp';
import bureal from '/images/bureal.gif';
import blob1 from '/images/blob1.webp';
import blob2 from '/images/blob2.webp';
import PreFooterCardLeft from './Cards/PreFooterCardLeft';
import PreFooterCardRight from './Cards/PreFooterCardRight';

const PreFooter = () => {
  return (
    <div className="bg-[#0e0e0e] -z-10">
      <div className="max-w-7xl mx-auto relative p-20 overflow-hidden">
        <div className='flex gap-5'>
          <PreFooterCardLeft image={tshirtsbg} blob={blob1} />
          <PreFooterCardRight image={sweatshirtsbg} blob={blob2} />
        </div>
        <img src={bureal} alt="bureal" className='absolute -top-12 right-32 w-96 z-10' />
        <img src={bureal} alt="bureal" className='absolute -bottom-24 right-32 w-96 rotate-180 z-10' />
      </div>
    </div>
  )
}

export default PreFooter