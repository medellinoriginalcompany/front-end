
interface Props {
  name: string,
  label: string,
  type: string,
  value: string,
  required: boolean,
  disabled?: boolean,
  onChange?: (params: any) => any
}

function Input(props: Props) {
  return (
    <div>
      <div className="flex flex-col group">
        <label
          htmlFor={props.name}
          className='font-semibold'>
          {props.label}
        </label>
        <input
          className={'bg-neutral-300/80 w-[500px] px-4 py-1.5 rounded-lg focus:outline-none' + (props.disabled ? ' text-neutral-500 cursor-not-allowed' : '')}
          type={props.type}
          id={props.name}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          required={props.required}
          disabled={props.disabled}
        />
      </div>

    </div>
  )
}

export default Input