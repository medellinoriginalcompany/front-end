import DefaultPage from "../components/DefaultPage"
import cldConfig from "../hooks/useCloudinary";
import Images from "../components/productPage/Images";
import Info from "../components/productPage/Info";
import Sizes from "../components/productPage/Sizes";
import Colors from "../components/productPage/Colors";
import QuantityButton from "../components/productPage/QuantityButton";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Product } from "../types/product/Product";
import { useApi } from "../hooks/useApi";

import hearticon from '/icons/heart.svg';
import bagicon from '/icons/shopping-bag.svg';
import Devolutions from "../components/productPage/Devolutions";
import SafePurchase from "../components/productPage/SafePurchase";
import SizeGuide from "../components/productPage/SizeGuide";
import DescriptionComments from "../components/productPage/DescriptionComments";

const ProductPage = () => {

  const api = useApi();
  const params = useSearchParams();
  const cld = cldConfig;

  const [product, setProduct] = useState<Product>();

  const navigate = useNavigate();
  const load = async () => {
    const id = params[0].get('product');

    try {
      const response = await api.getProduct(Number(id));

      if (response) {
        setProduct(response.product);
      }
    } catch (error: any) {
      navigate('/');
    }
  }

  useEffect(() => {
    load();

    return () => {
      setProduct(undefined);
    }
  }, []);

  return (
    <DefaultPage>
      <div className="px-20 py-10">
        <div className="lg:flex space-x-12">
          <Images url={cld.image(product?.Banner).toURL()} />

          <div className="w-1/2 space-y-4">
            <Info
              name={product?.Name}
              price={product?.Price}
              discountedPrice={product?.DiscountedPrice}
              stock={product?.Stock}
            />
            <hr className="border-neutral-300" />
            <Sizes />
            <Colors />

            <div className="flex space-x-5">
              <QuantityButton stock={Number(product?.Stock)} />
              <button className="bg-neutral-800 text-white font-medium px-9 py-2 rounded-full whitespace-nowrap">Adicionar ao Carrinho</button>
              <button title="Ir direto para compra">
                <img src={bagicon} alt="" className="min-w-[24px] w-6" />
              </button>
              <button title="Adicionar aos favoritos">
                <img src={hearticon} alt="" className="min-w-[24px] w-6" />
              </button>
            </div>
          </div>
        </div>

        <div>
          <p>
            Enviado de: <span>Nárnia</span>
          </p>
          <p>
            Simular frete
          </p>

          <hr className="border-neutral-300" />

          <div className="my-5 space-y-4">
            <Devolutions />
            <SafePurchase />
          </div>

          <SizeGuide />

          <DescriptionComments description={product?.Description} />
        </div>
      </div>
    </DefaultPage>
  )
}

export default ProductPage