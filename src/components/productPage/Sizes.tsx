
//* type Props = {}

const Sizes = (/* props: Props */) => {
  return (
    <div className="my-2 space-y-2">
      <h3 className="font-medium text-neutral-600">Tamanho</h3>
      <div className="space-x-2">
        <button className="bg-neutral-200 font-medium px-3 py-1 rounded">PP</button>
        <button className="bg-neutral-800 text-white font-medium px-3 py-1 rounded">P</button>
        <button className="bg-neutral-200 font-medium px-3 py-1 rounded">M</button>
        <button className="bg-neutral-200 font-medium px-3 py-1 rounded">G</button>
        <button className="bg-neutral-200 font-medium px-3 py-1 rounded">GG</button>
      </div>
    </div>
  )
}

export default Sizes