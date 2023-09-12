import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import LoginGuard from './contexts/VerifyLogin';

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

      <Route path='*' element={<Navigate to="/404" replace />} />
    </Routes>
  )
}

export default App
