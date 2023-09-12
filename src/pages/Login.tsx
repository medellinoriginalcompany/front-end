import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState, useRef, useContext, ChangeEvent } from 'react'
import { motion } from 'framer-motion'
import { AuthContext } from '../contexts/AuthContext'
import LoginInput from '../components/auth/LoginInput'

import '../App.css'
import logo from '/images/medellin-black.png'
import login_bg from '/images/login_bg.webp'
import erricon from '/icons/danger.svg'

const Login = () => {

  const auth = useContext(AuthContext)

  const emailRef = useRef<HTMLInputElement>(null!);

  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [errMsg, setErrMsg] = useState<string>("")

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const navigate = useNavigate();
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(email, password)
    try {
      const response = await auth.login(email, password);
      if (response) {
        navigate('/');
      };

    } catch (err: any) {
      switch (err.response?.status) {
        case 400:
          setErrMsg('Erro Interno');
          break;

        case 401:
          setErrMsg('Email ou senha inválidos');
          break;

        case 403:
          setErrMsg('Acesso negado');
          break;
        case 409:
          setErrMsg('Email já existente.');
          break;

        // Handle other error types if necessary

        default:
          setErrMsg('Erro inesperado');
          break;
      }
    }
  };

  return (
    <div className='flex gap-28 py-20 lg:max-w-4xl mx-auto'>
      <div className='space-y-10'>
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

            <LoginInput
              type='email'
              name='email'
              id='email'
              label='E-mail ou CPF'
              value={email}
              innerRef={emailRef}
              handleOnChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            />
            <LoginInput
              type='password'
              name='password'
              id='password'
              label='Senha'
              value={password}
              handleOnChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
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