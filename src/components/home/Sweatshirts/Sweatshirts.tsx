import FilterButton from "../../filter/FilterButton"
import ProductCard from "../ProductCard"

import banner from '/images/section_moletons.webp'
import model8 from '/images/model8.webp'
import model9 from '/images/model9.webp'
import model10 from '/images/model10.webp'

const Sweatshirts = () => {
  return (
    <section className='space-y-12 py-16'>
      <div className='relative'>
        <img src={banner} alt="Camisetas Medellin" className='w-full h-[65vh] object-top object-cover brightness-75' />
        <p className='font-abang font-semibold absolute top-0 py-52 px-20 text-5xl text-neutral-100'>
          Moletons Medellin
        </p>
      </div>

      <div className='lg:max-w-6xl mx-auto space-y-5'>
        <div className='lg:max-w-5xl mx-auto'>
          <p className='font-hubba-oblique text-5xl'>
            Moletons
          </p>
        </div>

        <div className='flex justify-between gap-9'>
          <div className='grid grid-cols-3 gap-5'>
            <ProductCard
              model={model8}
              title='Moletom A'
              price='229,99'
            />
            <ProductCard
              model={model9}
              title='Moletom B'
              price='229,99'
            />
            <ProductCard
              model={model10}
              title='Moletom C'
              price='229,99'
            />
          </div>

          <div className=''>
            <p className='mb-3 font-bold text-2xl'>
              Filtros
            </p>

            <ul className='space-y-4'>
              <li>
                <FilterButton
                  title='Tipo'
                />
              </li>
              <li>
                <FilterButton
                  title='Categoria'
                />
              </li>
              <li>
                <FilterButton
                  title='Tamanho'
                />
              </li>
              <li>
                <FilterButton
                  title='Cor'
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sweatshirts