import React, { useContext } from 'react'
import { UserContext } from './context/UserContextProvider'
import { Navigate } from 'react-router-dom';
import Loading from '../pages/Loading';

function PrivateRouter({children}) {
    const {user,ready}=useContext(UserContext);

    if(ready&&user){
      return children
    };

    if (!ready) {
      return (
        <Loading />
      )
    };
    
  return (
    <Navigate to={'/signup'}></Navigate>
  )
}

export default PrivateRouter