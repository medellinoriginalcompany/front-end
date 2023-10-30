import { Link } from 'react-router-dom';
import blobleft from '/images/blob1.webp';


type Props = {
  image: string,
  title: string,
  textSize?: string,
  link: string,
}

const PreFooterCardLeft = (props: Props) => {
  return (
    <>
      <img src={props.image} alt={props.title} className='' />
      <Link to={props.link} className='-skew-y-3 absolute -bottom-4 right-7'>
        <img src={blobleft} alt="blob" className='-rotate-45 w-32' />
        <p className={'absolute bottom-[73px] font-hubba-oblique whitespace-nowrap ' + (props.textSize)}>{props.title}</p>
      </Link>
    </>
  )
}

export default PreFooterCardLeft