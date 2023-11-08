import { useState } from "react"
import QuantityButton from "../productPage/QuantityButton"
import arrowdown from '/icons/arrow-down-1.svg';

type Props = {
  image: string,
  title: string,
  // color: string[],
  size: string,
  price: number,
  quantity: number,
}

const CartCard = (props: Props) => {

  const colors = ['Vermelho', 'Azul', 'Verde', 'Amarelo', 'Preto', 'Branco'];
  const sizes = ['P', 'M', 'G', 'GG'];

  const [selectedColor, setSelectedColor] = useState<string>('Preto');
  const [showColors, setShowColors] = useState<boolean>(false);
  const [selectedSize, setSelectedSize] = useState<string>('M');
  const [showSizes, setShowSizes] = useState<boolean>(false);
  return (
    <>
      <div className="flex items-start space-x-8 my-7">
        <img src={props.image} alt={props.title} className="w-44 h-44 object-cover" />
        <div className="space-y-2">
          <h3 className="text-lg font-medium">{props.title}</h3>
          <div className="flex items-center space-x-4">
            <div className="flex space-x-2 relative">
              <p>Cor:</p>
              <div className="flex cursor-pointer" onClick={() => setShowColors(!showColors)}>
                <span className="font-medium">
                  {selectedColor}
                </span>
                <ul className="absolute top-8 bg-white divide-y z-10 rounded shadow-lg">
                  {colors.map((color, index) => (
                    <>
                      {showColors && (
                        <li key={index} className="flex items-center space-x-2 px-8 py-2 rounded hover:bg-neutral-200" onClick={() => setSelectedColor(color)}>
                          <p className="font-medium">{color}</p>
                        </li>
                      )}
                    </>
                  ))}
                </ul>
                <img src={arrowdown} alt="seta para baixo" className="w-4 pt-1 mx-1" draggable='false' />

              </div>
            </div>
            <div className="flex space-x-2 relative">
              <p>Tamanho:</p>
              <div className="flex cursor-pointer" onClick={() => setShowSizes(!showSizes)}>
                <span className="font-medium">
                  {selectedSize}
                </span>
                <ul className="absolute top-8 bg-white divide-y z-10 rounded shadow-lg">
                  {sizes.map((size, index) => (
                    <>
                      {showSizes && (
                        <li key={index} className="flex items-center space-x-2 px-8 py-2 rounded hover:bg-neutral-200" onClick={() => setSelectedSize(size)}>
                          <p className="font-medium">{size}</p>
                        </li>
                      )}
                    </>
                  ))}
                </ul>
                <img src={arrowdown} alt="seta para baixo" className="w-4 pt-1 mx-1" draggable='false' />

              </div>
            </div>
          </div>
          <p className="text-lg">R${props.price}</p>
          <div className="w-fit">
            <QuantityButton stock={props.quantity} />
          </div>
          <div>
            <button className="text-sm text-red-500 hover:underline">Remover</button>
          </div>
        </div>
      </div>
      <hr />
    </>
  )
}

export default CartCard