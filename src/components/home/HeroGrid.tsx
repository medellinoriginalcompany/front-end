type Props = {
  children: React.ReactNode,
}

const HeroGrid = ({ children }: Props) => {
  return (
    <div className='max-w-7xl mx-auto grid grid-cols-3 justify-items-center py-5'>
      {children}
    </div>
  )
}

export default HeroGrid