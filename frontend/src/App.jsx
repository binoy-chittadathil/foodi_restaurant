
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Signup from './pages/Signup'
import UserContextProvider from './components/context/UserContextProvider'
import axios from 'axios'
import Layout from './components/layout/Layout'
import Cart from './pages/Cart'
import CartContextProvider from './components/context/CartContextProvider'
import PrivateRouter from './components/PrivateRouter'
import DashboardLayout from './components/layout/DashboardLayout'
import AllUsers from './components/AllUsers'
import Dashboard from './components/Dashboard'

axios.defaults.baseURL = 'https://foodi-restaurant.onrender.com';
axios.defaults.withCredentials = true;  //Automatically include cookies in requests

function App() {

  return (
    <div>
      <CartContextProvider>
        <UserContextProvider>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='/menu' element={<Menu />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/cart' element={<PrivateRouter><Cart /></PrivateRouter>} />
            </Route>

            <Route path='/dashboard' element={<PrivateRouter><DashboardLayout /></PrivateRouter>}>
              <Route index element={<Dashboard />} />
              <Route path='/dashboard/users' element={<AllUsers />} />
            </Route>
          </Routes>
        </UserContextProvider>
      </CartContextProvider>
    </div>
  )
}

export default App
