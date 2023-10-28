import { useState } from 'react'

const Devolutions = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div>
      <button className="text-xl font-semibold flex space-x-2" onClick={() => setShow(!show)}>
        <h2>Devoluções</h2>
        <span className={show ? 'rotate-90 translate-y-1 duration-300 ' : 'duration-500'}>&gt;</span>
      </button>
      {show && (
        <div className="space-y-4">
          <p>
            Passo a passo para devolução:
          </p>
          <ul className="list-decimal px-4">
            <li>
              Tem que estar inteiro sem rasgar
            </li>
            <li>
              Embalagem original
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Devolutions