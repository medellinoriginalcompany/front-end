import visaicon from '/icons/visa_icon.png';
import mastercardicon from '/icons/mastercard_icon.png';
import americanexpicon from '/icons/americanexp_icon.png';
import hipercardicon from '/icons/hipercard_icon.svg';
import eloicon from '/icons/elo_icon.webp';
import boletoicon from '/icons/boleto_icon.png';
import pixicon from '/icons/pix_icon.webp';
import mercadopagoicon from '/icons/mercadopago_icon.png';


type Props = {
  darkBg?: boolean,
};

const PaymentMethods = (props: Props) => {
  return (
    <ul className='flex items-center space-x-4'>
      <li>
        <img src={visaicon} alt="Visa" className='min-w-[40px] w-11' draggable='false' />
      </li>
      <li>
        <img src={mastercardicon} alt="Mastercard" className='min-w-[40px] w-12' draggable='false' />
      </li>
      <li>
        <img src={boletoicon} alt="Boleto" className={props.darkBg ? 'w-8' : 'w-8 brightness-0'} draggable='false' />
      </li>

      <li>
        <img src={pixicon} alt="Pix" className='w-7' draggable='false' />
      </li>
      <li>
        <img src={americanexpicon} alt="American Express" className='min-w-[40px] w-10' draggable='false' />
      </li>
      <li>
        <img src={hipercardicon} alt="Hipercard" className='min-w-[40px] w-14' draggable='false' />
      </li>
      <li>
        <img src={eloicon} alt="Elo" className='w-14' draggable='false' />
      </li>
      <li>
        <img src={mercadopagoicon} alt="Mercado Pago" className='w-10' draggable='false' />
      </li>
    </ul>
  )
}

export default PaymentMethods