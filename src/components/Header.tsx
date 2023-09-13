import logo from '/images/medellin-black.png';
import profileicon from '/icons/user.svg'
import wishlisticon from '/icons/heart.svg'
import carticon from '/icons/shopping-cart.svg'
import searchicon from '/icons/search-normal-1.svg'
import { Link } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { motion } from 'framer-motion';

const Header = () => {

  const auth = useContext(AuthContext);

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 1);
    });
  }, []);

  const handleLogout = () => {
    auth.logout();
  }

  return (
    <header className={scroll ? 'bg-neutral-100 sticky top-0 w-full z-50 shadow-lg' : 'bg-neutral-100 sticky top-0 w-full z-50'}>
      <motion.div className='text-center bg-neutral-900 text-neutral-100 p-1 h-9'
        animate={{
          height: scroll ? '0' : '36px',
          opacity: scroll ? 0 : 1,
          transition: {
            duration: 1,
            type: 'spring',
          }
        }}>
        <p className={scroll ? 'text-transparent' : ''}>
          Cupom xesquedele
        </p>
      </motion.div>
      <nav className='flex justify-center mx-auto items-center p-6 lg:gap-10 lg:max-w-5xl'>
        <Link to="/">
          <img src={logo} alt="Medellin Logo" className='w-24' />
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
            <Link to='/login'>
              <img src={profileicon} alt="Ver Perfil" />
            </Link>
            {!auth.user ? '' :
              <Link to='/wishlist'>
                <img src={wishlisticon} alt="Lista de Desejos" />
              </Link>
            }
            <Link to='/carrinho'>
              <img src={carticon} alt="Visualizar Carrinho" />
            </Link>
          </div>
          {!auth.user ? '' :
            <button onClick={handleLogout} >
              Sair
            </button>
          }
        </div>
      </nav>
    </header>
  )
}

export default Header