import { useInView } from 'framer-motion'
import { useRef } from 'react';

type Props = {
  banner: string,
  title: string,
}

const SectionBanner = (props: Props) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div className='relative' ref={ref}>
      <img src={props.banner} alt="Camisetas Medellin" className='w-full h-[65vh] object-center object-cover brightness-75 ' />
      <h1
        className='font-abang font-semibold absolute top-0 py-52 px-20 text-5xl text-neutral-100 '
        style={{
          transform: isInView ? 'none' : 'translateX(-200px',
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)"
        }}>
        {props.title}
      </h1>
    </div>
  )
}

export default SectionBanner