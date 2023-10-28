import { useState, useEffect } from 'react';

import minusicon from '/icons/minus.svg';
import addicon from '/icons/add.svg';

type Props = {
  stock: number,
}

const QuantityButton = (props: Props) => {
  const [quantity, setQuantity] = useState<number>(1);
  const stock = Number(props.stock);

  const handleAdd = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  }

  const handleMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  // Se a quantidade for maior que o estoque, a quantidade é igual ao estoque
  useEffect(() => {
    if (quantity > stock || quantity < 1) {
      setQuantity(1);
    }
  }, [quantity]);
  
  return (
    <div className='flex items-center bg-neutral-200 p-0.5'>
      <button onClick={handleMinus} className='p-2 rounded hover:bg-neutral-300'>
        <img src={minusicon} alt="Ícone de menos" className='min-w-[20px] w-5'/>
      </button>
      <input type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} min="1" max={`${stock}`}
        className="bg-neutral-200 w-12 h-8 text-center font-medium rounded focus:outline-none"
      />
      <button onClick={handleAdd} className='p-2 rounded hover:bg-neutral-300'>
        <img src={addicon} alt="Ícone de mais" className='min-w-[20px] w-5'/>
      </button>
    </div>
  )
}

export default QuantityButton