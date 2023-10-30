import stars from '/images/stars.webp';

type Props = {
  image: string,
  blob: string,
}

const PreFooterCardLeft = (props: Props) => {
  return (
    <div className='skew-y-6 w-1/2 flex flex-col justify-between relative'>
      <img src={props.image} alt="Camisetas" className='' />
      <div className='-skew-y-6 absolute bottom-32 left-10'>
        <img src={props.blob} alt="blob" className='-rotate-45' />
        <p className='absolute bottom-20 left-1 font-hubba-oblique text-4xl'>Camisetas</p>
      </div>
      <div className='-skew-y-6 flex gap-12 items-center'>
        <img src={stars} alt="stars" className='w-16' />
        <p className='text-white text-4xl font-light'>Veja mais</p>
      </div>
    </div>
  )
}

export default PreFooterCardLeft