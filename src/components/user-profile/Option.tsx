import React from 'react'

const Option: React.FC<any> = ({
  icon,
  title,
  handleClick,
  tab
}) => {
  return (
    <button onClick={handleClick}
      className={tab ?
        'flex gap-3 items-center py-3 px-8 w-full rounded-full hover:text-neutral-100 group hover:bg-neutral-800 font-semibold text-xl'
        :
        "flex gap-3 items-center py-3 px-8 w-full rounded-full hover:text-neutral-50 group hover:bg-neutral-800 text-xl"} >
      <img src={icon} alt="" className="group-hover:brightness-[6] group-hover:contrast-100 w-7" draggable="false" />
      <p>
        {title}
      </p>
    </button>
  )
}

export default Option