import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const UserContext=createContext();

function UserContextProvider({children}) {
  const [user,setUser]=useState('');
  const [ready,Setready]=useState(false);
  const contextValue={user,setUser,ready};

  useEffect(()=>{
    if(!user){
      axios.get('http://localhost:3000/profile').then(({data})=>{
        setUser(data);
        Setready(true);
      }).catch(err=>{
        console.log(err);
      })
    }
  },[]);

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider