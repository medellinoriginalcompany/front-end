import ProductCard from '../components/home/Cards/ProductCard'
import FilterButton from '../components/filter/FilterButton'
import banner from '/images/section_camisetas.webp'
import model5 from '/images/model5.webp'
import model6 from '/images/model6.webp'
import model7 from '/images/model7.webp'
import SectionBanner from '../components/home/SectionBanner'

export const Tshirts = () => {
  return (
    <section className='space-y-12 py-16'>
      <SectionBanner 
        banner={banner}
        title='Camisetas Medellin'
      />

      <div className='lg:max-w-6xl 2xl:max-w-6xl mx-auto space-y-5'>
        <div className='2xl:max-w-5xl mx-auto'>
          <h2 className='font-hubba-oblique text-5xl text-center lowercase'>
            Camisetas
          </h2>
        </div>

        <div className='flex justify-between gap-9'>
          <div className='grid grid-cols-3 gap-5'>
            <ProductCard
              model={model5}
              title='Camiseta A'
              price='229,99'
            />
            <ProductCard
              model={model6}
              title='Camiseta B'
              price='229,99'
            />
            <ProductCard
              model={model7}
              title='Camiseta C'
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
