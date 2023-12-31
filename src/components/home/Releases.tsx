import { Link } from 'react-router-dom'
import DiscountProductCard from './Cards/DiscountProductCard'

import model1 from '/images/model1.webp'
import model2 from '/images/model2.webp'
import model3 from '/images/model3.webp'
import model4 from '/images/model4.webp'

const Releases = () => {
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

      <div className=' mx-auto lg:max-w-7xl'>
        <div className='flex gap-5 overflow-hidden'>
          <DiscountProductCard
            model={model1}
            title='Camiseta A'
            oldPrice='299,99'
            newPrice='229,99'
            percentage={23}
          />
          <DiscountProductCard
            model={model2}
            title='Camiseta B'
            oldPrice='299,99'
            newPrice='229,99'
            percentage={12}
          />
          <DiscountProductCard
            model={model3}
            title='Camiseta C'
            oldPrice='299,99'
            newPrice='229,99'
            percentage={9}
          />
          <DiscountProductCard
            model={model4}
            title='Camiseta D'
            oldPrice='299,99'
            newPrice='229,99'
            percentage={10}
          />
        </div>
      </div>
    </section>
  )
}

export default Releases