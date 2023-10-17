import React from 'react'

type Props = {
  name: string,
  label: string,
  type: string,
  value: string,
  handleOnChange: ((e: React.ChangeEvent<HTMLInputElement>) => void),
  handleFocus?: ((e: React.FocusEvent<HTMLInputElement>) => void),
  maxlength?: number,
  required?: boolean,
  autoFocus?: boolean,
  focus?: boolean,
}

const Input = (props: Props) => {
  return (
    <div className='flex relative flex-col group'>
      <label htmlFor={props.name}
        className={props.value ?
          `absolute pointer-events-none transition-all duration-300 -translate-y-4 text-sm font-medium` :
          `absolute pointer-events-none transition-all duration-300 translate-y-2 text-lg group-focus-within:-translate-y-4 group-focus-within:text-sm group-focus-within:font-medium`}>
        {props.label}
      </label>
      <input
        className="bg-transparent py-2 text-lg border-b border-neutral-400 focus:outline-none"
        type={props.type}
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={props.handleOnChange}
        onFocus={props.handleFocus}
        maxLength={props.maxlength}
        required={props.required}
        autoFocus={props.autoFocus}
      />
    </div>
  )
}

export default Input