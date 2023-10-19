import ProductCard from '../components/home/Cards/ProductCard'
import FilterButton from '../components/filter/FilterButton'
import banner from '/images/section_camisetas.webp'
import model from '/images/banner_placeholder.webp'
import SectionBanner from '../components/home/SectionBanner'
import DefaultPage from '../components/DefaultPage'

export const Tshirts = () => {
  return (
    <DefaultPage>
      <section className='space-y-12'>
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
                url={model}
                title='Camiseta A'
                price='229,99'
                oldPrice=""
                percentage=""
              />
              <ProductCard
                url={model}
                title='Camiseta B'
                price='229,99'
                oldPrice=""
                percentage=""
              />
              <ProductCard
                url={model}
                title='Camiseta C'
                price='229,99'
                oldPrice=""
                percentage=""
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
    </DefaultPage>

  )
}
