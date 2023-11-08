import DefaultPage from "../components/DefaultPage"
import CartCard from "../components/cart/CartCard";
import carticon from '/icons/shopping-cart.svg';

const Cart = () => {


  return (
    <DefaultPage>
      <div className="max-w-6xl mx-auto my-20">
        <div className="flex items-center gap-2">
          <img src={carticon} alt="Sacola" className="w-8" />
          <h2 className="font-medium text-lg">
            Carrinho
          </h2>

          <span>
            &#40;1&#41;
          </span>
        </div>
        <div className="my-9">
          <CartCard
            image="/images/banner_placeholder.webp"
            title="Camiseta"
            // color={colors}
            size="M"
            price={59.99}
            quantity={1}
          />
          <CartCard
            image="/images/banner_placeholder.webp"
            title="Long sleeve"
            // color={colors}
            size="GG"
            price={59.99}
            quantity={1}
          />
        </div>

        <button className="bg-neutral-800 text-white px-10 py-2 rounded-full font-medium">Comprar</button>
      </div>
    </DefaultPage>
  )
}

export default Cart