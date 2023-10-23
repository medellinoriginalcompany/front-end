import { Link } from 'react-router-dom'


type Props = {
  url: string,
  type?: string,
  title: string,
  price: string,
  oldPrice?: string,
  percentage: string,
}
const ProductCard = (props: Props) => {

  const cleanTitle = props.title.replace(/ /g, '-').toLowerCase();


  return (
    <Link to={'/'+cleanTitle}>
      <img src={props.url} alt="Modelo" className='md:min-w-[300px] md:w-[300px] md:h-[370px] 2xl:h-[450px] object-cover' />
      <div>
        <p className='text-lg font-medium'>
          {props.title}
        </p>
        <div className='space-y-1'>
          {
            props.oldPrice &&
            <p className='text-neutral-500 line-through'>
              De: R$
              <span>{props.oldPrice}</span>
            </p>
          }
          <div className='space-x-2 items-center flex'>
            <span>R$ {props.price}</span>
            {
              props.percentage && (
                <span className='rounded font-medium text-green-500 text-sm'>{props.percentage}% OFF</span>
              )
            }
          </div>
        </div>

      </div>
    </Link>
  )
}

export default ProductCard