import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import DiscountProductCard from './Cards/DiscountProductCard'
import cldConfig from '../../hooks/useCloudinary'
import { useApi } from '../../hooks/useApi'

import model1 from '/images/model1.webp'
import model2 from '/images/model2.webp'
import model3 from '/images/model3.webp'
import model4 from '/images/model4.webp'
import { Product } from '../../types/product/Product'
import ProductCard from './Cards/ProductCard'

const Releases = () => {
  const cld = cldConfig;

  const api = useApi();

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [confirmationMessage, setConfirmationMessage] = useState<string>('');
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);

  const getProducts = async () => {
    try {
      const response = await api.getProducts();

      if (response) {
        setProducts(response.products);
        setLoading(false);
      }
    } catch (error: any) {
      console.log(error);
      console.log("Ocorreu um erro ao obter os produtos");
      setConfirmationMessage("Ocorreu um erro ao obter os produtos");
      setShowConfirmation(true);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section className="py-14 space-y-9">
      <div className="flex justify-between items-center mx-auto lg:max-w-7xl">
        <h2 className='font-hubba-oblique text-5xl'>
          Lançamentos
        </h2>

        <Link to='/lancamentos' className='underline'>
          Mostrar Tudo
        </Link>
      </div>

      <div className='mx-auto lg:max-w-7xl'>
        <div className='flex gap-5 overflow-x-scroll'>
          {
            products.slice(0, 10).map((product: Product) => (
              <ProductCard key={product.ID}
                url={cld.image(product.Banner).toURL()}
                title={product.Name}
                price={product.Price}
                oldPrice={product.oldPrice!}
                percentage={product.Percentage}
              /> 
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Releases