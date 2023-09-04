import { Link } from 'react-router-dom'


import { Component } from 'react'

type Props = {
  model: string,
  title: string,
  oldPrice: string,
  newPrice: string,
}

type State = {}

class DiscountProductCard extends Component<Props, State> {
  state = {}

  render() {
    return (
      <Link to='/'>
        <img src={this.props.model} alt="Modelo" className='min-w-[350px] h-[450px] object-cover' />
        <div className='py-3 text-lg'>
          <p>
            {this.props.title}
          </p>
          <div className='space-y-1'>
            <p className='text-neutral-500 line-through'>
              De: R$
              <span>{this.props.oldPrice}</span>
            </p>
            <div className='space-x-2'>
              <span>R$ {this.props.newPrice}</span>
              <span className='text-green-500 text-base'>23% off</span>
            </div>
          </div>
        </div>
      </Link>
    )
  }
}

export default DiscountProductCard