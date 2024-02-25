
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Signup from './pages/Signup'
import UserContextProvider from './components/context/UserContextProvider'
import axios from 'axios'
import Layout from './components/Layout'

axios.defaults.withCredentials=true;  //Automatically include cookies in requests

function App() {

  return (
    <div>
      <UserContextProvider>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/menu' element={<Menu/>} />
        <Route path='/signup' element={<Signup/>}/>
        </Route>
      </Routes>
      </UserContextProvider>
    </div>
  )
}

export default App
