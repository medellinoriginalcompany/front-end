
const SizeGuide = () => {
  return (
    <div className="space-y-5">
      <div>
        <h2 className="font-hubba-oblique text-3xl">Guia de Tamanhos</h2>
        <hr className="border-neutral-300" />
      </div>
      <table>
        <thead className="bg-neutral-300 text-neutral-800">
          <tr>
            <td className="px-5 py-1 font-semibold">Tamanho</td>
            <td className="px-5 py-1 font-semibold">Altura</td>
            <td className="px-5 py-1 font-semibold">Largura</td>
          </tr>
        </thead>

        <tbody className="bg-neutral-200">
          <tr>
            <td className="px-5 py-1">PP</td>
            <td className="px-5 py-1">60cm</td>
            <td className="px-5 py-1">40cm</td>
          </tr>
          <tr>
            <td className="px-5 py-1">P</td>
            <td className="px-5 py-1">65cm</td>
            <td className="px-5 py-1">45cm</td>
          </tr>
          <tr>
            <td className="px-5 py-1">M</td>
            <td className="px-5 py-1">70cm</td>
            <td className="px-5 py-1">50cm</td>
          </tr>
          <tr>
            <td className="px-5 py-1">G</td>
            <td className="px-5 py-1">75cm</td>
            <td className="px-5 py-1">55cm</td>
          </tr>
          <tr>
            <td className="px-5 py-1">GG</td>
            <td className="px-5 py-1">80cm</td>
            <td className="px-5 py-1">60cm</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default SizeGuide