import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState, ChangeEvent } from 'react'
import Input from '../components/auth/Input'
import { ptBR } from '@mui/x-date-pickers/locales/ptBR'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import axios from 'axios';
import 'dayjs/locale/pt-br';
import { motion } from 'framer-motion'

import '../App.css'
import logo from '/images/medellin-black.png'
import login_bg from '/images/login_bg.webp'
import erricon from '/icons/danger.svg'

const Register = () => {

  const FORM_ENDPOINT = import.meta.env.VITE_REACT_APP_API + '/registro';

  const fullNameRef = useRef<HTMLInputElement>(null!);

  const [fullName, setFullName] = useState<string>("");
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [cpf, setCpf] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [emailFocus, setEmailFocus] = useState<boolean>(false);
  const [cpfFocus, setCpfFocus] = useState<boolean>(false);
  const [passwordFocus, setPasswordFocus] = useState<boolean>(false);
  const [confirmPasswordFocus, setConfirmPasswordFocus] = useState<boolean>(false);
  const [validEmail, setValidEmail] = useState<boolean>(false);
  const [validPassword, setValidPassword] = useState<boolean>(false);
  const [validMatch, setValidMatch] = useState<boolean>(false);

  const emailREGEX = /[-A-Za-z0-9!#$%&'*+=?^_`{|}~]+(?:\.[-A-Za-z0-9!#$%&'*+=?^_`{|}~]+)*@(?:[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?/gm;
  const passwordREGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/gm;

  const [success, setSuccess] = useState<boolean>(false);
  const [errMsg, setErrMsg] = useState<string>("");

  useEffect(() => {
    fullNameRef.current.focus();
  }, []);

  useEffect(() => {
    setValidEmail(emailREGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPassword(passwordREGEX.test(password)); // Validar se a senha corresponde ao REGEX

    const match = password === confirmPassword; // Confirmar a senha
    setValidMatch(match)
  }, [password, confirmPassword]);

  useEffect(() => {
    setErrMsg('');
  }, [fullName, email, password, confirmPassword, birthDate, cpf, phone]); // Limpar a mensagem de erro ao alterar qualquer campo

  const navigate = useNavigate();
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const response = await axios.post(FORM_ENDPOINT,
        JSON.stringify({ fullName, birthDate, cpf, phone, email, password }),
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      );

      if (response) {
        setSuccess(true)
        setTimeout(() => {
          navigate('/login');
        }, 1500); // Redirecionar para a página de login após 1.5s 
      }


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
          setErrMsg('Email/Usuário já existente.');
          break;

        // Handle other error types if necessary

        default:
          setErrMsg('Erro inesperado');
          break;
      }
    }
  };


  return (
    <div className='flex gap-28 py-12 lg:max-w-4xl mx-auto'>
      <div className='space-y-10'>
        <Link to='/'>
          <img src={logo} alt="Medellin Logo" className='w-32' />
        </Link>
        <h2 className='font-bold text-3xl'>
          Olá, seja bem-vindo!
        </h2>

        <div className={success ? 'bg-green-400/70 rounded mb-3 py-2 px-5 text-green-800 flex justify-between items-center' : 'hidden'}>
          <p className="">
            Registro realizado com sucesso! Redirecionando...
          </p>
          <div className="w-5 h-5 rounded-full border-2 border-green-800 border-t-transparent animate-spin"></div>
        </div>

        <motion.div className={errMsg ? 'flex justify-between items-center bg-red-300/30 p-3 rounded-lg border border-red-400 mb-3 font-semibold text-red-500' : 'hidden'}
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
        </motion.div>

        <form onSubmit={handleSubmit} className='flex flex-col'>
          <div className='space-y-5'>

            <Input
              type='text'
              name='name'
              id='name'
              label='Nome completo'
              innerRef={fullNameRef}
              value={fullName}
              handleOnChange={(e: ChangeEvent<HTMLInputElement>) => setFullName(e.target.value)}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='pt-br' localeText={ptBR.components.MuiLocalizationProvider.defaultProps.localeText}>
              <DatePicker label="Data de Nascimento"
                sx={{
                  width: '100%',
                }}
                views={['year', 'month', 'day']}
                value={birthDate}
                onChange={(newValue) => {
                  setBirthDate(newValue);
                }}
                selectedSections={undefined} onSelectedSectionsChange={undefined} />
            </LocalizationProvider>
            <Input
              type='tel'
              name='cpf'
              label='CPF'
              maxLength={14}
              value={cpf}
              handleOnChange={(e: ChangeEvent<HTMLInputElement>) => setCpf(e.target.value)}
              handleFocus={() => setCpfFocus(true)}
            />
            <div className={cpfFocus ? 'bg-red-300/30 p-3 rounded-lg border border-red-400 font-semibold text-red-500' : 'hidden'}>
              <p className='font-bold text-sm'>
                As senhas devem coincidir.
              </p>
            </div>
            <Input
              type='tel'
              name='phone'
              id='phone'
              label='Telefone'
              maxLength={11}
              value={phone}
              handleOnChange={(e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
            />

            <Input
              type='email'
              name='email'
              id='email'
              label='E-mail'
              value={email}
              handleOnChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              handleFocus={() => setEmailFocus(true)}
            />

            <div className={emailFocus && email && !validEmail ? 'bg-red-300/30 p-3 rounded-lg border border-red-400 font-semibold text-red-500' : 'hidden'}>
              <p className='font-bold text-sm'>
                Email inválido. O email deve parecer com:
              </p>
              <ul className='px-5 my-2 text-sm list-disc'>
                <li>
                  johndoe@exemplo.com
                </li>
              </ul>
            </div>
            <Input
              type='password'
              name='password'
              id='password'
              label='Senha'
              value={password}
              handleOnChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              handleFocus={() => setPasswordFocus(true)}
            />

            <div className={passwordFocus && password && !validPassword ? 'bg-red-300/30 p-3 rounded-lg border border-red-400 font-semibold text-red-500' : 'hidden'}>
              <p className='font-bold text-sm'>
                A senha deve conter:
              </p>
              <ul className='px-5 my-2 text-sm list-disc'>
                <li>
                  No mínimo 8 caracteres
                </li>
                <li>
                  Letras maiúsculas ou minúsculas
                </li>
                <li>
                  Ao menos um caractere especial
                </li>
              </ul>
            </div>

            <Input
              type='password'
              name='confirmPassword'
              id='confirmPassword'
              label='Confirmar Senha'
              value={confirmPassword}
              handleOnChange={(e: ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
              handleFocus={() => setConfirmPasswordFocus(true)}
            />

            <div className={confirmPasswordFocus && confirmPassword && password && !validMatch ? 'bg-red-300/30 p-3 rounded-lg border border-red-400 font-semibold text-red-500' : 'hidden'}>
              <p className='font-bold text-sm'>
                As senhas devem coincidir.
              </p>
            </div>
          </div>

          <div className='flex flex-col self-center py-10 space-y-2'>
            <button type="submit" disabled={!!(!validEmail || !validPassword || !validMatch || !fullName || !email || !password || !confirmPassword)}
              className='bg-neutral-800 rounded-full text-neutral-100 font-bold w-fit px-14 py-2'>
              Cadastrar
            </button>
            <Link to='/login' className='w-fit block self-center'>
              Entrar
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

export default Register