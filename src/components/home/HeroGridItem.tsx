
type Props = {
  icon: string,
  text: string,
}

const HeroGridItem = (props: Props) => {
  return (
    <div className='flex flex-col items-center space-y-2'>
      <img src={'/icons/'+ props.icon +'.svg'} alt="Cartões de crédito" className='w-12' />
      <p>{props.text}</p>
    </div>
  )
}

export default HeroGridItem