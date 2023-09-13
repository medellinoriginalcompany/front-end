import { Link } from 'react-router-dom'


import { Component } from 'react'

type Props = {
  model: string,
  title: string,
  price: string,
}

type State = {}

class ProductCard extends Component<Props, State> {
  state = {}

  render() {
    return (
      <Link to='/'>
        <img src={this.props.model} alt="Modelo" className='lg:w-[300px] lg:h-[370px] 2xl:min-w-[350px] 2xl:h-[450px] object-cover' />
        <div className='py-3 text-lg'>
          <p>
            {this.props.title}
          </p>
          <div className='space-x-2'>
            <span>R$ {this.props.price}</span>
            <span className='text-green-500 text-base'>23% off</span>
          </div>

        </div>
      </Link>
    )
  }
}

export default ProductCard