import { Link } from 'react-router-dom'
import '../App.css'
import logo from '/images/medellin-black.png'
import login_bg from '/images/login_bg.webp'
import InputForm from '../components/auth/InputForm'

const Login = () => {
  return (
    <div className='flex gap-28 py-20 lg:max-w-4xl mx-auto'>
      <div className='space-y-10'>
        <Link to='/'>
          <img src={logo} alt="Medellin Logo" className='w-32'/>
        </Link>
        <h2 className='font-bold text-3xl'>
          Olá, seja bem-vindo!
        </h2>

        <form action="" className='flex flex-col'>
          <div className='space-y-5'>

            <InputForm
              type='email'
              name='email'
              id='email'
              label='E-mail ou CPF'
            />
            <InputForm
              type='password'
              name='password'
              id='password'
              label='Senha'
            />
          </div>
          <Link to='/esqueci-senha' className='self-end font-semibold'>
            Esqueci minha senha
          </Link>

          <div className='flex flex-col self-center py-10 space-y-2'>
            <button type="submit" className='bg-neutral-800 rounded-full text-neutral-100 font-bold w-fit px-14 py-2'>
              Entrar
            </button>
            <Link to='/registro' className='w-fit block self-center'>
              Cadastre-se
            </Link>
          </div>
        </form>
      </div>

      <div className='login-img scale-[2]'>
        <img src={login_bg} alt="" className=' -translate-y-9' draggable='false'/>
      </div>


    </div>
  )
}

export default Login