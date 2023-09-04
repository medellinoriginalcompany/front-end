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
  }

  return (
    <div className="flex relative flex-col group">
      <input type={props.type} value={value} name={props.name} id={props.id} onChange={handleChange}
        className="bg-transparent py-2 text-lg w-[400px] border-b border-neutral-800 placeholder:text-neutral-800 focus:outline-none" />
      <label htmlFor={props.id}
        className={value ? `absolute pointer-events-none text-lg transition-all duration-300 -translate-y-4 -translate-x-2 scale-[0.8] font-semibold`
      : `absolute pointer-events-none translate-y-2 translate-x-1 text-lg transition-all duration-300 group-focus-within:-translate-y-4 group-focus-within:-translate-x-2 group-focus-within:scale-[0.8]`}>
        {props.label}
      </label>
    </div>
  )
}

export default InputForm