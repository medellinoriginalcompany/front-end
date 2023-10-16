import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState, useContext, ChangeEvent } from 'react'
import { motion } from 'framer-motion'
import { AuthContext } from '../contexts/AuthContext'
import Input from '../components/auth/Input'

import '../App.css'
import logo from '/images/medellin-black.png'
import login_bg from '/images/login_bg.webp'
import erricon from '/icons/danger-red.svg'

const Login = () => {

  const auth = useContext(AuthContext)

  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [errMsg, setErrMsg] = useState<string>("")

  useEffect(() => {
    setErrMsg('');
  }, [email, password]);

  const navigate = useNavigate();
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const response = await auth.login(email, password);
      if (response) {
        navigate('/');
      };

    } catch (err: any) {
      setErrMsg(err.response.data.message);
    }
  };

  return (
    <div className='flex gap-28 py-20 lg:max-w-4xl mx-auto'>
      <div className='space-y-10 min-w-[440px]'>
        <Link to='/'>
          <img src={logo} alt="Medellin Logo" className='w-32' />
        </Link>
        <h2 className='font-bold text-3xl'>
          Olá, seja bem-vindo!
        </h2>
        {errMsg ?
          <motion.div className='flex justify-between items-center bg-red-300/30 p-3 rounded-lg border border-red-400 mb-3 font-semibold text-red-500'
            initial={{ maxHeight: '0%', opacity: 0, translateY: 50 }}
            animate={{ maxHeight: '100%', opacity: 1, translateY: 0 }}
            transition={{
              duration: 1,
              type: 'spring',
            }}
          >
            <p>
              {errMsg}
            </p>

            <img src={erricon} />
          </motion.div> :

          ''

        }
        <form onSubmit={handleSubmit} method='post' className='flex flex-col'>
          <div className='space-y-5'>

            <Input
              type='email'
              name='email'
              label='E-mail ou CPF'
              value={email}
              handleOnChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              required
            />
            <Input
              type='password'
              name='password'
              label='Senha'
              value={password}
              handleOnChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              required
            />
          </div>
          <Link to='/esqueci-senha' className='self-end font-semibold my-2'>
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
        <img src={login_bg} alt="" className=' -translate-y-9' draggable='false' />
      </div>


    </div>
  )
}

export default Login