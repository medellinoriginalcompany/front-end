import PreFooterCardLeft from './Cards/PreFooterCardLeft';
import PreFooterCardRight from './Cards/PreFooterCardRight';

import tshirtsbg from '/images/tshirts-bg.webp';
import sweatshirtsbg from '/images/sweatshirts-bg.webp';
import longsleevebg from '/images/longsleeve-bg.webp';
import collectionsbg from '/images/collections-bg.webp';
import bureal from '/images/bureal.gif';
import logo from '/images/medellin-white.png';
import stars from '/images/stars.webp';


const PreFooter = () => {
  return (
    <div className="bg-[#0e0e0e] -z-10">
      <div className="max-w-7xl mx-auto relative p-20 overflow-hidden">
        <ul className='flex flex-col [&>*:nth-child(odd)]:self-start [&>*:nth-child(even)]:self-end'>
          <li className='skew-y-3 flex justify-between items-start pr-4'>
            <div className='relative w-[53%]'>
              <PreFooterCardLeft
                image={tshirtsbg}
                title='Camisetas'
                textSize='text-4xl'
                link='/camisetas'
              />
            </div>
            <img src={logo} alt="logo" className='-skew-y-3 w-64 object-contain' />
            <img src={bureal} alt="bureal" className='absolute -top-32 -right-20 -z-10' />
          </li>
          <li className='skew-y-3 relative w-1/2 pl-4'>
            <PreFooterCardRight
              image={sweatshirtsbg}
              title='Moletons'
              textSize='text-4xl'
              link='/moletons'
            />
            <img src={bureal} alt="bureal" className='absolute top-10 right-0 rotate-180 -z-10' />

          </li>
          <li className='skew-y-3 relative w-1/2 pr-4'>
            <PreFooterCardLeft
              image={longsleevebg}
              title='Manga Longa'
              textSize='text-3xl'
              link='/manga-longa'
            />
          </li>
          <li className='skew-y-3 relative w-1/2 pl-4'>
            <PreFooterCardRight
              image={collectionsbg}
              title='Coleções'
              textSize='text-4xl'
              link='/colecoes'
            />
          </li>
        </ul>
        <div className='flex gap-12 items-center'>
          <img src={stars} alt="stars" className='w-16' draggable='false'/>
        </div>
      </div>
    </div>
  )
}

export default PreFooter