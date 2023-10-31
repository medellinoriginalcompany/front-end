import Header from "../components/Header"
import Option from '../components/user-profile/Option'
import EditProfile from "../components/user-profile/EditProfile"
import Wishlist from "../components/user-profile/Wishlist"
import Addresses from "../components/user-profile/Addresses"
import Orders from "../components/user-profile/Orders"
import Footer from "../components/Footer"
import { useSearchParams } from "react-router-dom"

import usericon from '/icons/user.svg'
import wishlisticon from '/icons/heart.svg'
import addressesicon from '/icons/location.svg'
import ordersicon from '/icons/box.svg'
import refoundicon from '/icons/arrow-2.svg'
import logouticon from '/icons/logout-red.svg'
import dangericon from '/icons/danger-red-outline.svg'
import { useApi } from "../hooks/useApi"


const MyProfile = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  const params = [
    '',
    'lista-de-desejos',
    'enderecos',
    'pedidos',
    'trocas-devolucoes',
    'excluir-conta',
  ];

  const showEditProfile = searchParams.has('tab') === false;
  const showWishlist = searchParams.get('tab') === params[1];
  const showAddresses = searchParams.get('tab') === params[2];
  const showOrders = searchParams.get('tab') === params[3];
  const showRefound = searchParams.get('tab') === params[4];
  const showDeleteAccount = searchParams.get('tab') === params[5];

  const api = useApi();
  const logout = async () => {
    await api.logout();
    window.location.href = '/';
  }

  return (
    <>
      <Header />
      <div className="max-w-3xl mx-auto justify-evenly py-28 flex">
        <div className="px-4 min-w-full">
          {showEditProfile ? (
            <EditProfile />
          ) : null}
          {showWishlist ? (
            <Wishlist />
          ) : null}
          {showAddresses ? (
            <>
              <Addresses />
            </>
          ) : null}
          {showOrders ? (
            <>
              <Orders />
            </>
          ) : null}
          {showRefound ? (
            <>
            </>
          ) : null}
          {showDeleteAccount ? (
            <>
            </>
          ) : null}
        </div>

        <div className="w-max min-h-[400px] px-4 border-l border-neutral-300">
          <ul className="space-y-1 w-max">
            <li>
              <Option
                title="Editar Perfil"
                icon={usericon}
                tab={showEditProfile}
                handleClick={() => setSearchParams()}
              />
            </li>
            <li>
              <Option
                title="Lista de Desejos"
                icon={wishlisticon}
                tab={showWishlist}
                handleClick={() => setSearchParams({ tab: params[1] })}
              />
            </li>
            <li>
              <Option
                title="Endereços"
                icon={addressesicon}
                tab={showAddresses}
                handleClick={() => setSearchParams({ tab: params[2] })}
              />
            </li>
            <li>
              <Option
                title="Pedidos e Entregas"
                icon={ordersicon}
                tab={showOrders}
                handleClick={() => setSearchParams({ tab: params[3] })}
              />
            </li>
            <li>
              <Option
                title="Trocas e Devoluções"
                icon={refoundicon}
                tab={showRefound}
                handleClick={() => setSearchParams({ tab: params[4] })}
              />
            </li>
            <li>
              <button onClick={() => setSearchParams({ tab: params[5] })}
                className='flex gap-3 items-center py-3 px-8  w-full font-medium text-xl rounded hover:bg-red-100'>
                <img src={dangericon} alt="" className="group-hover:brightness-[6] w-7" draggable="false" />
                <p className="text-red-500">
                  Excluir minha conta
                </p>
              </button>
            </li>
            <li>
              <button onClick={logout}
                className='flex gap-3 items-center py-3 px-8 mt-16 w-full font-semibold text-xl rounded hover:bg-red-100'>
                <img src={logouticon} alt="" className="group-hover:brightness-[6] w-7" draggable="false" />
                <p className="text-red-500">
                  Sair
                </p>
              </button>
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default MyProfile