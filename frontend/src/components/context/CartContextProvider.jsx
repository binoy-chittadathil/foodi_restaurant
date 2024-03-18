import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const CartContext=createContext();

function CartContextProvider({children}) {
  const [cartDataLength,setCartDataLength]=useState(0);
  const [cartData,setCartData]=useState([]);
  const [quantity,setQuantity]=useState({})
  
  const contextValue={cartDataLength,setCartDataLength,cartData,setCartData,quantity,setQuantity};

  useEffect(()=>{
    axios.get('/cart').then(({data})=>{
      setCartData(data)
    })
  },[]);

  useEffect(()=>{
    const newQuantity = cartData.reduce((acc, data) => {
      acc[data._id] = data.quantity;
      return acc;
    }, {});
    setQuantity(newQuantity);
  
  },[cartData])
  
  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider