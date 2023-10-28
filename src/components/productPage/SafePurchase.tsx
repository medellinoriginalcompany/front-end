import { useState } from 'react'

import visaicon from '/icons/visa_icon.png';
import mastercardicon from '/icons/mastercard_icon.png';
import americanexpicon from '/icons/americanexp_icon.png';
import hipercardicon from '/icons/hipercard_icon.svg';
import eloicon from '/icons/elo_icon.webp';
import boletoicon from '/icons/boleto_icon.png';
import pixicon from '/icons/pix_icon.webp';
import mercadopagoicon from '/icons/mercadopago_icon.png';

const SafePurchase = () => {
  const [show, setShow] = useState<boolean>(true);

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
                <ul className='flex items-center space-x-4'>
                  <li>
                    <img src={visaicon} alt="Visa" className='min-w-[40px] w-11' />
                  </li>
                  <li>
                    <img src={mastercardicon} alt="Mastercard" className='min-w-[40px] w-12' />
                  </li>
                  <li>
                    <img src={boletoicon} alt="Boleto" className='w-8 brightness-0' />
                  </li>

                  <li>
                    <img src={pixicon} alt="Pix" className='w-7' />
                  </li>
                  <li>
                    <img src={americanexpicon} alt="American Express" className='min-w-[40px] w-10' />
                  </li>
                  <li>
                    <img src={hipercardicon} alt="Hipercard" className='min-w-[40px] w-14' />
                  </li>
                  <li>
                    <img src={eloicon} alt="Elo" className='min-w-[40px] w-14' />
                  </li>
                  <li>
                    <img src={mercadopagoicon} alt="Mercado Pago" className='w-10'/>
                  </li>
                </ul>
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