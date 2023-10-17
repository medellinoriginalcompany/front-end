import { Link } from 'react-router-dom'

// import hearticon from '/icons/heart.svg'

type Props = {
  model: string,
  title: string,
  oldPrice: string,
  newPrice: string,
  percentage: number,
}

const DiscountProductCard = (props: Props) => {
  return (
    <Link to='/' className='relative'>
      <img src={props.model} alt="Modelo" className='lg:w-[300px] lg:h-[370px] 2xl:min-w-[350px] 2xl:h-[450px] object-cover hover:brightness-75 transition-all' />
      {/* <img src={hearticon} alt="" className='absolute top-0 right-0 mx-2 my-2 '/> */}
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
            <span>R$ {props.newPrice}</span>
            <span className='rounded font-medium text-green-500 text-sm'>{props.percentage}% OFF</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default DiscountProductCard