import { useState } from 'react';
import { motion } from 'framer-motion';

import staricon from '/icons/star-yellow.svg';

type Props = {
  description?: string,
};

const DescriptionComments = (props: Props) => {

  const [description, setDescription] = useState(true);
  const [comments, setComments] = useState(false);

  return (
    <div className="my-10">
      <div className="flex space-x-3">
        <div>
          <button className="font-hubba-oblique text-3xl px-9 pb-2" onClick={() => { setDescription(true); setComments(false) }}>Descrição</button>
          {description && (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              className="w-full h-1 bg-neutral-800 rounded-full"></motion.div>
          )}
        </div>
        <div>
          <button className="font-hubba-oblique text-3xl px-9 pb-2" onClick={() => { setDescription(false); setComments(true) }}>Comentários</button>
          {comments && (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              className="w-full h-1 bg-neutral-800 rounded-full"></motion.div>
          )}
        </div>
      </div>
      <hr className="border-neutral-300" />

      {description && (
        <span>
          {props.description}
        </span>
      )}

      {comments && (
        <div className="space-y-4 my-5">
          <div className='flex items-center space-x-7'>
            <span>V*****</span>
            <span className='flex space-x-1'>
              <img src={staricon} alt="Estrela" className='w-4' />
              <img src={staricon} alt="Estrela" className='w-4' />
              <img src={staricon} alt="Estrela" className='w-4' />
              <img src={staricon} alt="Estrela" className='w-4' />
              <img src={staricon} alt="Estrela" className='w-4' />
            </span>
            <div className='flex space-x-2 text-neutral-400'>
              <p>
                Cor: <span>Preto</span>
              </p>
              <span>/</span>
              <p>
                Tamanho: <span>M</span>
              </p>
            </div>
          </div>

          <div>
            <p>
              Produto de ótima qualidade, recomendo!
            </p>
          </div>
        </div>
      )}
    </div>
  )
};

export default DescriptionComments;