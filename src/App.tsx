import { Routes, Route, Navigate, useLocation, Link } from 'react-router-dom';

import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import LoginGuard from './contexts/VerifyLogin';
import MyProfile from './pages/MyProfile';

function App() {
  const location = useLocation();

  return (
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

      <Route path='*' element={<Navigate to="/404" replace />} />
      <Route path='/404' element={<Link to='/'>Voltar</Link>} />
    </Routes>
  )
}

export default App
