import arrowicon from '/icons/arrow-down-1.svg'

type Props = {
  title: string,
}

const FilterButton = (props: Props) => {
  return (
    <div className='flex justify-between items-center bg-neutral-300 px-4 py-2 rounded-lg w-44'>
      <p>
        {props.title}
      </p>
      <img src={arrowicon} className='w-5'/>
    </div>
  )
}

export default FilterButton