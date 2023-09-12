import {useState} from 'react'

type Props = {
  type: string,
  name: string,
  id: string,
  label: string,
  maxLength?: number
}


const InputForm = (props: Props) => {

  const [value, setValue] = useState('');

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    // Verifique se o campo é o CPF e aplique a formatação
    if (props.name === 'cpf') {
      // Formate o valor do CPF como XXX.XXX.XXX-XX
      const formattedValue = value.replace(/\D/g, ''); // Remove caracteres não numéricos

      setValue(formattedValue.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4'));
    } else if (props.name === 'number') {
      // Formate o valor do número como (XX) XXXXX-XXXX
      const formattedValue = value.replace(/\D/g, ''); // Remove caracteres não numéricos

      setValue(formattedValue.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3'));
    } else {
      setValue(e.currentTarget.value);
    }
    console.log(value)
  }

  return (
    <div className="flex relative flex-col group">
      <input type={props.type} value={value} name={props.name} id={props.id} onChange={handleChange} maxLength={props.maxLength}
        className="bg-transparent py-2 text-lg border-b border-neutral-800 placeholder:text-neutral-800 focus:outline-none" required/>
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