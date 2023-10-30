import { useState } from 'react'
import PaymentMethods from '../PaymentMethods';

const SafePurchase = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div>
      <button className="text-xl font-semibold flex space-x-2" onClick={() => setShow(!show)}>
        <h2>Compra Segura</h2>
        <span className={show ? 'rotate-90 translate-y-1 duration-300 ' : 'duration-500'}>&gt;</span>
      </button>
      {show && (
        <div className="space-y-2 my-2">
          <ul className='flex space-x-5'>
            <li>
              <button>
                Atendimento ao cliente
              </button>
            </li>
            <li>
              <button>
                Proteção de dados
              </button>
            </li>
            <li>
              <button>
                Pagamento seguro
              </button>
            </li>
          </ul>
          <hr className="border-neutral-300" />

          <div className='space-y-8'>
            <div>
              <h3 className='font-serif'>Atendimento ao cliente</h3>
              <div>
                <p className='font-medium'>
                  Email: <span>ajuda@medellincompany.com.br</span>
                </p>
                <p className='font-medium'>
                  Preciso de ajuda
                </p>
              </div>
            </div>

            <div>
              <h3 className='font-serif'>Proteção de dados</h3>
              <div>
                <p className='font-medium'>Não compartilharemos seus dados pessoais</p>
              </div>
            </div>

            <div>
              <h3 className='font-serif'>Pagamento seguro</h3>
              <div className='space-y-2'>
                <p className='font-medium'>Meios de pagamento</p>
                <PaymentMethods />
                <p className='font-medium text-neutral-600'>
                  Todos os pagamentos são processados pelo MercadoPago
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SafePurchase