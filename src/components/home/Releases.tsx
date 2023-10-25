import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import cldConfig from '../../hooks/useCloudinary'
import { useApi } from '../../hooks/useApi'
import { Product } from '../../types/product/Product'
import ProductCard from './Cards/ProductCard'

import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Releases = () => {
  const cld = cldConfig;

  const api = useApi();

  const [products, setProducts] = useState<Product[]>([]);
  const [slidesPerView, setSlidesPerView] = useState<number>(4);

  const getProducts = async () => {
    try {
      const response = await api.getActiveProducts();

      if (response) {
        setProducts(response.products);
      }
    } catch (error: any) {
      console.log("Ocorreu um erro ao obter os produtos");
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 1260) {
        setSlidesPerView(4);
      } else {
        setSlidesPerView(2);
      }
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="py-14">
      <div className="flex justify-between items-center mx-auto md:max-w-7xl">
        <h2 className='font-hubba-oblique text-5xl'>
          Lançamentos
        </h2>

        <Link to='/lancamentos' className='underline'>
          Mostrar Tudo
        </Link>
      </div>

      <div className='mx-auto md:max-w-7xl'>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={20}
          className='py-14'
          slidesPerView={slidesPerView}
          navigation
          pagination={{ clickable: true }}>

          {products.slice(0, 10).map((product: Product) => (
            <SwiperSlide key={product.ID}>
              <ProductCard
                url={cld.image(product.Banner).toURL()}
                title={product.Name}
                price={product.Price}
                oldPrice={product.oldPrice}
                percentage={product.Percentage}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Releases