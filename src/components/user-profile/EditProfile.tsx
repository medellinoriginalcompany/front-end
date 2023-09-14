import { useState, ChangeEvent, useContext, useEffect } from 'react';
import Input from '../user-profile/Input';
import { AuthContext } from '../../contexts/AuthContext';
import { motion } from 'framer-motion';
import dayjs from 'dayjs';

const EditProfile = () => {

  const FORM_ENDPOINT = import.meta.env.VITE_REACT_APP_API + "/registro";
  const auth = useContext(AuthContext);

  const [fullName, setFullName] = useState<string>(auth.user?.FullName || '');
  const [email, setEmail] = useState<string>(auth.user?.Email || '');
  const [phone, setPhone] = useState<string>(auth.user?.Phone || '');
  const [cpf, setCpf] = useState<string>(auth.user?.CPF || '');

  const BirthDate = dayjs(auth.user?.BirthDate).format('DD/MM/YYYY');

  // Recarregar todos os dados após página atualizar
  useEffect(() => {
    setFullName(auth.user?.FullName || '');
    setEmail(auth.user?.Email || '');
    setPhone(auth.user?.Phone || '');

    // Aplica a formatação do CPF (###.###.###-##)
    const cpf = auth.user?.CPF.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    setCpf(cpf || '');

    // Aplica a formatação do telefone (## #####-####)
    const phone = auth.user?.Phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    setPhone(phone || '');

  }, [auth.user?.FullName, auth.user?.Email, auth.user?.Phone, auth.user?.CPF]);

  return (
    <motion.div className="space-y-10"
      initial={{ opacity: 0, height: 0, translateX: -60 }}
      animate={{
        opacity: 1, height: 'auto', translateX: 0,
        transition: {
          type: "spring",
          bounce: 0.3,
          duration: 1.9
        }
      }}
    >
      <p className="text-3xl font-bold">
        Meu Perfil
      </p>
      <form action={FORM_ENDPOINT} method='post' className='space-y-4'>
        <div className='space-y-4'>
          <div className='flex flex-col gap-4'>
            <Input
              name="fullName"
              label="Nome Completo"
              type="text"
              value={fullName}
              required
              onChange={(e: ChangeEvent<HTMLInputElement>) => setFullName(e.target.value)}
            />
            <Input
              name={undefined as any}
              label="Data de Nascimento"
              type="text"
              value={BirthDate}
              required
              disabled
            />
            <Input
              name="cpf"
              label="CPF"
              type="text"
              value={cpf}
              required
              disabled
              onChange={(e: ChangeEvent<HTMLInputElement>) => setCpf(e.target.value)}
            />
            <Input
              name="fullName"
              label="Telefone"
              type="text"
              value={phone}
              required
              onChange={(e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
            />
            <Input
              name="email"
              label="E-mail"
              type="text"
              value={email}
              required
              onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            />
          </div>


        </div>

        <button disabled={!!(!fullName)}
          className='bg-violet-500 font-medium rounded-lg px-7 py-2.5 text-center text-white w-fit hover:bg-violet-500/90 focus:ring focus:outline-none focus:ring-violet-300'
          type="submit">
          Salvar
        </button>
      </form>
    </motion.div>
  )
}

export default EditProfile