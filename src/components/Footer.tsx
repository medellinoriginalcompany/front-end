import { Link } from 'react-router-dom';

import logo from '/images/medellin-white.png';
import instagramicon from '/icons/instagram.svg'
import yticon from '/icons/yt.png'
import visaicon from '/icons/visa_icon.png'
import eloicon from '/icons/elo_icon.webp'
import boletoicon from '/icons/boleto_icon.png'
import pixicon from '/icons/pix_icon.webp'
import mastercardicon from '/icons/mastercard_icon.png'
import locationicon from '/icons/location.svg'

const Footer = () => {
  return (
    <footer className='bg-neutral-950 text-neutral-100 w-full py-12'>
      <div className='lg:max-w-7xl mx-auto space-y-12'>
        <div>
          <Link to='/' className='w-fit block'>
            <img src={logo} alt="Medellin Logo" className='w-24' />
          </Link>
        </div>

        <div className='grid grid-cols-4'>
          <div className='space-y-3'>
            <h3 className='font-semibold text-xl'>
              Ajuda
            </h3>
            <ul className='space-y-1'>
              <li>
                <Link to='/atendimento'>
                  Atendimento
                </Link>
              </li>
              <li>
                <Link to='/trocas-devolucoes'>
                  Trocas e Devoluções
                </Link>
              </li>
              <li>
                <Link to='/vendas-entregas'>
                  Vendas e Entregas
                </Link>
              </li>
              <li>
                <Link to='https://www.procon.df.gov.br/wp-content/uploads/2019/08/Codigo-do-consumidor-FINAL.pdf' target='_blank'>
                  Código do Consumidor
                </Link>
              </li>
              <li>
                <Link to='https://www.procon.df.gov.br'>
                  Procon
                </Link>
              </li>
            </ul>
          </div>
          
          <div className='space-y-3'>
            <h3 className='font-semibold text-xl'>
              Termos e Condições
            </h3>
            <ul className='space-y-1'>
              <li>
                <Link to='/politica-privacidade'>
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to='/termos-uso'>
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>

          <div className='space-y-3'>
            <h3 className='font-semibold text-xl'>
              Sobre 
            </h3>
            <ul className='space-y-1'>
              <li>
                <Link to='/fale-conosco'>
                  Fale Conosco
                </Link>
              </li>
              <li>
                <Link to='/sobre'>
                  Nossa História
                </Link>
              </li>
              <li>
                <Link to='/indique'>
                  Indique e Ganhe
                </Link>
              </li>
            </ul>
          </div>

          <div className='space-y-3'>
            <h3 className='font-semibold text-xl'>
              Redes Sociais
            </h3>
            <ul className='space-y-1 flex items-center gap-2'>
              <li>
                <Link to='/fale-conosco'>
                  <img src={instagramicon} alt="Ícone instagram" className='brightness-[6]'/>
                </Link>
              </li>
              <li>
                <Link to='/sobre'>
                  <img src={yticon} alt="Ícone instagram" className='w-6 pb-1'/>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='flex justify-between items-end'>
          <div className='space-y-3'>
            <h3 className='text-xl font-semibold'>
              Formas de Pagamento
            </h3>
            <div className='flex items-center gap-4'>
              <img src={visaicon} alt="Ícone Pagamento Visa" className='w-10 object-scale-down rounded-sm'/>
              <img src={mastercardicon} alt="Ícone Pagamento Visa" className='w-10 object-scale-down rounded-sm'/>
              <img src={boletoicon} alt="Ícone Pagamento Visa" className='w-8 object-scale-down'/>
              <img src={pixicon} alt="Ícone Pagamento Visa" className='w-8 object-scale-down'/>
              <div className='bg-neutral-100 p-1 rounded'>
                <img src={eloicon} alt="Ícone Pagamento Visa" className='w-14 object-scale-down'/>
              </div>
            </div>
          </div>

          <div className='rounded-full bg-neutral-100 p-2'>
            <img src={locationicon} alt="Localização" className='w-8 brightness-[.3]'/>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer