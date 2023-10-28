import DefaultPage from "../components/DefaultPage"
import { Swiper, SwiperSlide } from 'swiper/react'
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Product } from "../types/product/Product";

import 'swiper/css'
import 'swiper/css/scrollbar';

import model from '/images/banner_placeholder.webp'
import { useApi } from "../hooks/useApi";
import cldConfig from "../hooks/useCloudinary";
import calculatePercentage from "../func/calculatePercentage";

const ProductPage = () => {

  const api = useApi();
  const params = useSearchParams();
  const cld = cldConfig;

  const [product, setProduct] = useState<Product>();
  
  const percentage = calculatePercentage(product?.Price, product?.DiscountedPrice);

  const load = async () => {
    const id = params[0].get('product');

    try {
      const response = await api.getProduct(Number(id));

      if (response) {
        setProduct(response.product);
      }
    } catch (error: any) {
      console.log("Ocorreu um erro ao obter os produtos");
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
          <div className="flex gap-4 lg:h-[672px] w-full">
            <Swiper
              className="cursor-pointer pr-3"
              slidesPerView={3}
              spaceBetween={50}
              direction={'vertical'}
              scrollbar={{ draggable: true }}>
              <SwiperSlide>
                <img src={model} alt="model" className="md:w-80 xl:w-96 md:h-56 object-cover" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={model} alt="model" className="md:w-80 md:h-56 object-cover" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={model} alt="model" className="md:w-80 md:h-56 object-cover" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={model} alt="model" className="md:w-80 md:h-56 object-cover" />
              </SwiperSlide>
            </Swiper>
            <div className="w-full">
              <img src={cld.image(product?.Banner).toURL()} alt="model" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="w-1/2 space-y-4">
            <div>
              <h2 className="font-hubba-oblique text-5xl">{product?.Name}</h2>
              <div>
                Avaliações
              </div>
              <p className="text-sm">Em estoque: <span>{product?.Stock}</span></p>
            </div>
            <div className="my-4">
              {product?.DiscountedPrice! > 0 ?
                <>
                  <p className='text-neutral-500 line-through'>
                    De: R$
                    <span>{product?.Price}</span>
                  </p>
                  <div className='space-x-2 items-center flex'>
                    <span>R$ {product?.DiscountedPrice}</span>
                    <span className='rounded font-medium text-green-500 text-sm'>{percentage}% OFF</span>
                  </div>
                </> :
                <p className=''>R$ {product?.Price}</p>}
              <div>
                <p className="font-medium text-neutral-600">5x de R$ 20,00 sem juros</p>
              </div>
            </div>
            <hr className="border-neutral-300" />
            <div className="my-2 space-y-2">
              <h3 className="font-medium text-neutral-600">Tamanho</h3>
              <div className="space-x-2">
                <button className="bg-neutral-200 font-medium px-3 py-1 rounded">PP</button>
                <button className="bg-neutral-800 text-white font-medium px-3 py-1 rounded">P</button>
                <button className="bg-neutral-200 font-medium px-3 py-1 rounded">M</button>
                <button className="bg-neutral-200 font-medium px-3 py-1 rounded">G</button>
                <button className="bg-neutral-200 font-medium px-3 py-1 rounded">GG</button>
              </div>
            </div>
            <div>
              <h3>Cor:<span className="px-2">Laranja</span></h3>
              <div className="flex gap-2 max-w-md">
                <button className="w-7 h-7 bg-black border border-neutral-300 rounded-full"></button>
                <button className="w-7 h-7 bg-neutral-500 border border-neutral-300 rounded-full"></button>
                <button className="w-7 h-7 bg-neutral-200 border border-neutral-300 rounded-full"></button>
                <button className="w-7 h-7 bg-purple-500 border border-neutral-300 rounded-full"></button>
                <button className="w-7 h-7 bg-blue-500 border border-neutral-300 rounded-full"></button>
                <button className="w-7 h-7 bg-orange-500 border border-neutral-300 rounded-full"></button>
              </div>
            </div>

            <div>
              <button className="bg-neutral-800 text-white font-medium px-9 py-2 rounded-full whitespace-nowrap">Adicionar ao Carrinho</button>
            </div>

            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsam aliquam eaque quo quam ducimus veritatis rem ut,
              porro tempora sed perferendis quisquam illo hic sapiente deleniti voluptas adipisci voluptatibus.
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


          <div className="space-y-5">
            <div>
              <h2 className="font-hubba-oblique text-3xl">Guia de Tamanhos</h2>
              <hr className="border-neutral-300" />
            </div>
            <table>
              <thead className="bg-neutral-300 text-neutral-800">
                <tr>
                  <td className="px-5 py-1 font-semibold">Tamanho</td>
                  <td className="px-5 py-1 font-semibold">Altura</td>
                  <td className="px-5 py-1 font-semibold">Largura</td>
                </tr>
              </thead>

              <tbody className="bg-neutral-200">
                <tr>
                  <td className="px-5 py-1">PP</td>
                  <td className="px-5 py-1">60cm</td>
                  <td className="px-5 py-1">40cm</td>
                </tr>
                <tr>
                  <td className="px-5 py-1">P</td>
                  <td className="px-5 py-1">65cm</td>
                  <td className="px-5 py-1">45cm</td>
                </tr>
                <tr>
                  <td className="px-5 py-1">M</td>
                  <td className="px-5 py-1">70cm</td>
                  <td className="px-5 py-1">50cm</td>
                </tr>
                <tr>
                  <td className="px-5 py-1">G</td>
                  <td className="px-5 py-1">75cm</td>
                  <td className="px-5 py-1">55cm</td>
                </tr>
                <tr>
                  <td className="px-5 py-1">GG</td>
                  <td className="px-5 py-1">80cm</td>
                  <td className="px-5 py-1">60cm</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <h2 className="font-hubba-oblique text-3xl">Comentários</h2>
            <hr className="border-neutral-300" />
          </div>
        </div>
      </div>
    </DefaultPage>
  )
}

export default ProductPage