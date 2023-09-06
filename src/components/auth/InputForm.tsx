import {useState} from 'react'

type Props = {
  type: string,
  name: string,
  id: string,
  label: string,
}


const InputForm = (props: Props) => {

  const [value, setValue] = useState('');

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
    console.log(value)
  }

  return (
    <div className="flex relative flex-col group">
      <input type={props.type} value={value} name={props.name} id={props.id} onChange={handleChange}
        className="bg-transparent py-2 text-lg border-b border-neutral-800 placeholder:text-neutral-800 focus:outline-none" />
      <label htmlFor={props.id}
        className={value ?
          `absolute pointer-events-none text-sm transition-all duration-300 -translate-y-4 self-start font-semibold`
        : `absolute pointer-events-none text-lg transition-all duration-300 translate-y-2 group-focus-within:-translate-y-4 group-focus-within:text-sm`}>
        {props.label}
      </label>
    </div>
  )
}

export default InputForm