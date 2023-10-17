import { Link } from 'react-router-dom'


type Props = {
  url: string,
  title: string,
  price: string,
  oldPrice: string,
  percentage: string,
}
const ProductCard = (props: Props) => {


  return (
    <Link to='/'>
      <img src={props.url} alt="Modelo" className='md:min-w-[300px] md:w-[300px] md:h-[370px] 2xl:h-[450px] object-cover' />
      <div className='py-3 text-lg'>
        <p>
          {props.title}
        </p>
        <div className='space-y-1'>
          <p className='text-neutral-500 line-through'>
            De: R$
            <span>{props.oldPrice}</span>
          </p>
          <div className='space-x-2 items-center flex'>
            <span>R$ {props.price}</span>
            <span className='rounded font-medium text-green-500 text-sm'>{props.percentage}% OFF</span>
          </div>
        </div>

      </div>
    </Link>
  )
}

export default ProductCard