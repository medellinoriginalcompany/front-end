import Home from './pages/Home'
import Navbar from './components/header/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {


  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registro' element={<Register />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
