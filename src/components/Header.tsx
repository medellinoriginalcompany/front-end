import logo from '/images/medellin-black.png';
import profileicon from '/icons/user.svg'
import wishlisticon from '/icons/heart.svg'
import carticon from '/icons/shopping-cart.svg'
import searchicon from '/icons/search-normal-1.svg'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='p-6'>
      <nav className='flex justify-center mx-auto items-center lg:gap-10 lg:max-w-5xl'>
        <Link to="/">
          <img src={logo} alt="Medellin Logo" className='w-28' />
        </Link>
        <ul className='flex gap-5 mx-auto items-center'>
          <li>
            <Link to='/masculino'>
              Masculino
            </Link>
          </li>
          <li>
            <Link to='/feminino'>
              Feminino
            </Link>
          </li>
          <li>
            <Link to='/infantil'>
              Infantil
            </Link>
          </li>
          <li>
            <Link to='/colecoes'>
              Coleções
            </Link>
          </li>
          <li>
            <Link to='/parceiros'>
              Parceiros
            </Link>
          </li>
        </ul>


        <div className='flex gap-5'>
          <form>
            <div className='relative w-full'>
              <input type="search" name="search" id="search" placeholder='Buscar'
                className='bg-neutral-300 px-5 py-2 rounded-full focus:outline-none focus:ring-2 ring-neutral-400 placeholder:text-neutral-600 placeholder:font-semibold' />
              <button type="submit">
                <div className='absolute top-0 right-0 px-3 py-2 rounded-r-full bg-neutral-300'>
                  <img src={searchicon} className='w-5' />
                </div>
              </button>
            </div>
          </form>
          <div className='flex items-center gap-3'>
            <Link to='/meu-perfil'>
              <img src={profileicon} alt="Ver Perfil" />
            </Link>
            <Link to='/wishlist'>
              <img src={wishlisticon} alt="Lista de Desejos" />
            </Link>
            <Link to='/carrinho'>
              <img src={carticon} alt="Visualizar Carrinho" />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header