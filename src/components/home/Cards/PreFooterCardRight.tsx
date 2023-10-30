import { Link } from 'react-router-dom';
import blobright from '/images/blob2.webp';

type Props = {
  image: string,
  title: string,
  textSize: string,
  link: string,
}

const PreFooterCardRight = (props: Props) => {
  return (
    <>
      <img src={props.image} alt={props.title} />
      <Link to={props.link} className='-skew-y-3 absolute bottom-0 right-7'>
        <img src={blobright} alt="blob" className='-rotate-[220deg] w-32' />
        <p className={'absolute bottom-11 left-5 font-hubba-oblique whitespace-nowrap ' + (props.textSize)}>{props.title}</p>
      </Link>
    </>
  )
}

export default PreFooterCardRight