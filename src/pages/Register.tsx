import { Link } from 'react-router-dom'
import { useState } from 'react'
import InputForm from '../components/auth/InputForm'
import { ptBR } from '@mui/x-date-pickers/locales/ptBR'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import 'dayjs/locale/pt-br';

import '../App.css'
import logo from '/images/medellin-black.png'
import login_bg from '/images/login_bg.webp'

const Register = () => {

  const [birthDate, setBirthDate] = useState<Date | null>(null);
  console.log(birthDate)


  return (
    <div className='flex gap-28 py-12 lg:max-w-4xl mx-auto'>
      <div className='space-y-10'>
        <Link to='/'>
          <img src={logo} alt="Medellin Logo" className='w-32' />
        </Link>
        <h2 className='font-bold text-3xl'>
          Olá, seja bem-vindo!
        </h2>

        <form action="" className='flex flex-col'>
          <div className='space-y-5'>

            <InputForm
              type='text'
              name='name'
              id='name'
              label='Nome completo'
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
            <InputForm
              type='tel'
              name='cpf'
              id='cpf'
              label='CPF'
              maxLength={14}
            />
            <InputForm
              type='tel'
              name='number'
              id='number'
              label='Telefone'
            />
            <InputForm
              type='email'
              name='email'
              id='email'
              label='E-mail'
            />
            <InputForm
              type='password'
              name='password'
              id='password'
              label='Senha'
            />
            <InputForm
              type='password'
              name='confirmPassword'
              id='confirmPassword'
              label='Confirmar Senha'
            />
          </div>

          <div className='flex flex-col self-center py-10 space-y-2'>
            <button type="submit" className='bg-neutral-800 rounded-full text-neutral-100 font-bold w-fit px-14 py-2'>
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