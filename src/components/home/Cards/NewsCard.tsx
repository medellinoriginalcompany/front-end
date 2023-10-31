import { useState } from 'react';

import bellicon from '/icons/bell.svg';

const NewsCard = () => {
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, tel);
  }

  return (
    <div className='bg-neutral-300 mx-auto w-full my-20 py-10 pb-20 rounded-xl md:max-w-6xl'>
      <div className='mx-auto w-fit space-y-5'>
        <div className='w-fit mx-auto'>
          <img src={bellicon} alt="bell" className='w-16' draggable='false' />
        </div>

        <div className='space-y-14'>
          <h3 className='font-hubba-oblique text-5xl text-center'>
            Receba nossas novidades e promoções  exclusivas
          </h3>
          <form className='flex flex-col lg:block lg:space-x-5' onSubmit={handleSubmit}>
            <input type="email" name='email' id='email' placeholder='Digite seu e-mail' maxLength={50} aria-label='Digite seu e-mail'
              className='py-2 px-5 lg:w-72 rounded-full placeholder:text-neutral-500 focus:outline-none focus:ring-2 ring-neutral-600'
              onChange={e => setEmail(e.target.value)} value={email}
            />
            <span className='text-neutral-500 text-center'>ou</span>
            <input type="tel" name='tel' id='tel' placeholder='Digite seu WhatsApp' maxLength={11} aria-label='Digite seu WhatsApp'
              className='py-2 px-5 lg:w-72 rounded-full placeholder:text-neutral-500 focus:outline-none focus:ring-2 ring-neutral-600'
              onChange={e => setTel(e.target.value)} value={tel}
            />
            <button type="submit" className='bg-neutral-800 text-white px-16 py-2 rounded-full font-medium my-5 hover:bg-neutral-950 focus:outline-none focus:ring-4 ring-neutral-500'>
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewsCard