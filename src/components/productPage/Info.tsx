import calculatePercentage from '../../func/calculatePercentage';

type Props = {
  name?: string,
  price?: number,
  discountedPrice?: number,
  stock?: string,
}

const Info = (props: Props) => {
  const percentage = calculatePercentage(props.price, props.discountedPrice);

  return (
    <>
      <div>
        <h2 className="font-hubba-oblique text-5xl">{props.name}</h2>
        <div>
          Avaliações
        </div>
        <p className="text-sm">Em estoque: <span>{props.stock}</span></p>
      </div>
      <div className="my-4">
        {props.discountedPrice! > 0 ?
          <>
            <p className='text-neutral-500 line-through text-xl'>
              De: R$
              <span>{props.price}</span>
            </p>
            <div className='space-x-2 items-center flex'>
              <span className="text-2xl">R${props.discountedPrice}</span>
              <span className='rounded font-medium text-green-500 self-end text-lg'>{percentage}% OFF</span>
            </div>
          </> :
          <p className='text-2xl'>R${props.price}</p>}
        <div>
          <p className="font-medium text-neutral-600">5x de R$ 20,00 sem juros</p>
        </div>
      </div>
    </>
  )
}

export default Info