import { Routes, Route, Navigate, useLocation, Link } from 'react-router-dom';

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import LoginGuard from './contexts/VerifyLogin';
import MyProfile from './pages/MyProfile';
import Tshirts from './pages/Tshirts';
import Sweatshirts from './pages/Sweatshirts';
import LongSleeves from './pages/LongSleeves';
import Collections from './pages/Collections';
import ScrollToTop from './func/ScrollToTop';

import { register } from 'swiper/element/bundle'

import './App.css'
import Product from './pages/ProductPage';
import Cart from './pages/Cart';

register();

function App() {
  const location = useLocation();

  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={
          <LoginGuard>
            <Login />
          </LoginGuard>
        } />
        <Route path='/registro' element={
          <LoginGuard>
            <Register />
          </LoginGuard>
        } />
        <Route path='/meu-perfil' element={<MyProfile />} />
        <Route path='/camisetas' element={<Tshirts />} />
        <Route path='/moletons' element={<Sweatshirts />} />
        <Route path='/manga-longa' element={<LongSleeves />} />
        <Route path='/colecoes' element={<Collections />} />
        <Route path='/carrinho' element={<Cart />} />

        <Route path='/:name' element={<Product />} />

        <Route path='*' element={<Navigate to="/404" replace />} />
        <Route path='/404' element={<Link to='/'>Voltar</Link>} />
      </Routes>
      <ScrollToTop />
    </>
  )
}

export default App
