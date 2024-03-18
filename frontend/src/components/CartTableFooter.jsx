import React, { useContext } from 'react'
import { CartContext } from './context/CartContextProvider'
import { UserContext } from './context/UserContextProvider';

function CartTableFooter() {
    const {cartData}=useContext(CartContext);
    const {user}=useContext(UserContext);

    const totalPrice = cartData.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className='flex justify-around mt-8'>
        <div>
          <h3 className='font-semibold'>Customer Details</h3>
          <div className='text-[#555555]'>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>User_id: {user._id}</p>
          </div>
        </div>
        <div>
          <h3 className='font-semibold'>Shopping Details</h3>
          <div className='text-[#555555]'>
            <p>Total Items: {cartData.length}</p>
            <p>Total Price: <span className='font-semibold text-black'>${totalPrice}</span></p>
          </div>
          <button className='btn w-28 bg-green text-white hover:text-black'>Pay</button>
        </div>
      </div>
  )
}

export default CartTableFooter