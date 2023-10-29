
//* type Props = {}

const Sizes = (/* props: Props */) => {
  return (
    <div className="my-2 space-y-2">
      <h3 className="font-medium text-neutral-600">Tamanho</h3>
      <div className="space-x-2">
        <button className="bg-neutral-200/40 text-neutral-400 font-medium px-3 py-1 rounded relative" disabled>
          <hr className="border-neutral-400 w-full absolute left-0 top-0 translate-y-4 rotate-45"/>
          PP
        </button>
        <button className="bg-neutral-800 text-white font-medium px-3 py-1 rounded">P</button>
        <button className="bg-neutral-200 font-medium px-3 py-1 rounded">M</button>
        <button className="bg-neutral-200 font-medium px-3 py-1 rounded">G</button>
        <button className="bg-neutral-200 font-medium px-3 py-1 rounded">GG</button>
      </div>
    </div>
  )
}

export default Sizes