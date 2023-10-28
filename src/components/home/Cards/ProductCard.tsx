import { Link } from 'react-router-dom'
import calculatePercentage from '../../../func/calculatePercentage';


type Props = {
  id: number,
  url: string,
  type?: string,
  title: string,
  price: number,
  discountedPrice?: number,
}
const ProductCard = (props: Props) => {

  const cleanTitle = props.title.replace(/ /g, '-').toLowerCase();
  const percentage = calculatePercentage(props.price, props.discountedPrice!);

  return (
    <Link to={'/' + cleanTitle + '?product=' + props.id}>
      <img src={props.url} alt="Modelo" className='md:min-w-[300px] md:w-[300px] md:h-[370px] 2xl:h-[450px] object-cover' />
      <div>
        <p className='text-lg font-medium'>
          {props.title}
        </p>
        <div className='space-y-1'>
          {props.discountedPrice! > 0 ?
            <>
              <p className='text-neutral-500 line-through'>
                De: R$
                <span>{props.price}</span>
              </p>
              <div className='space-x-2 items-center flex'>
                <span>R$ {props.discountedPrice}</span>
                <span className='rounded font-medium text-green-500 text-sm'>{percentage}% OFF</span>
              </div>
            </> :
            <p className=''>R$ {props.price}</p>}
        </div>

      </div>
    </Link>
  )
}

export default ProductCard