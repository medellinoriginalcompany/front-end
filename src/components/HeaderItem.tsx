import { Link } from 'react-router-dom'

type Props = {
  name: string,
  link: string,
}

const HeaderItem = (props: Props) => {
  return (
    <li>
      <Link to={props.link} className='hover:text-neutral-600'>
        {props.name}
      </Link>
    </li>
  )
}

export default HeaderItem