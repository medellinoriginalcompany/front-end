import logo from '/images/medellin-white.png';

type Props = {
  image: string,
  blob: string,
}

const PreFooterCardRight = (props: Props) => {
  return (
    <div className=' space-y-10 w-1/2 flex flex-col items-center z-20'>
      <img src={logo} alt="Logo Medellin" className='w-56' />
      <div className='skew-y-6 relative'>
        <img src={props.image} alt="Moletons" className='' />
        <div className='-skew-y-6 absolute bottom-0 right-7'>
          <img src={props.blob} alt="blob" className='-rotate-[220deg] w-32' />
          <p className='absolute bottom-11 left-5 font-hubba-oblique text-4xl'>Moletons</p>
        </div>
      </div>
    </div>
  )
}

export default PreFooterCardRight