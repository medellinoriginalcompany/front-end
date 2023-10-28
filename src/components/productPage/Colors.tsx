
//* type Props = {}

const Colors = (/* props: Props */) => {
  return (
    <div>
      <h3>Cor:<span className="px-2">Laranja</span></h3>
      <div className="flex gap-2 max-w-md">
        <button className="w-7 h-7 bg-black border border-neutral-300 rounded-full"></button>
        <button className="w-7 h-7 bg-neutral-500 border border-neutral-300 rounded-full"></button>
        <button className="w-7 h-7 bg-neutral-200 border border-neutral-300 rounded-full"></button>
        <button className="w-7 h-7 bg-purple-500 border border-neutral-300 rounded-full"></button>
        <button className="w-7 h-7 bg-blue-500 border border-neutral-300 rounded-full"></button>
        <button className="w-7 h-7 bg-orange-500 border border-neutral-300 rounded-full"></button>
      </div>
    </div>
  )
}

export default Colors