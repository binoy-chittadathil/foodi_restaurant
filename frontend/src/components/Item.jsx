import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from './context/UserContextProvider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'
import { CartContext } from './context/CartContextProvider';

function Item({item}) {
  const {user}=useContext(UserContext);
  const {setCartData}=useContext(CartContext)
  const [ok,setOk]=useState(false)
  const navigate=useNavigate()

  //function for handle cart
  async function handleAddToCart(){
    if(!user){
      navigate('/signup')
    }else{
      await axios.post('/cart',item).then(async ()=>{

        //alert item added successfully
        await Swal.fire({
          position: "center",
          icon: "success",
          title: "Item added successfully",
          showConfirmButton: false,
          timer: 1500
        });
        setOk(true)
      }).catch(err=>{
        Swal.fire({
          title: "Product already exist in the cart!",
          icon: "warning",
          showCancelButton: false,
        })
        console.error(err);
      });
    }
  };

  //when item added to the cart the cartData state will change
  useEffect(()=>{
    axios.get('/cart').then(({ data }) => {
     setCartData(data);
   });
 },[ok])

  return (
                <div className='hover:border shadow-xl p-6 flex flex-col rounded-3xl'>
                  <div className='flex items-center justify-center'>
                  <img className='w-4/5 hover:scale-105 transition-all duration-300' src={item.image} />
                  </div>
                  <div className='space-y-3'>
                  <h2 className='font-bold text-xl'>{item.name}</h2>
                  <p className='text-[#555555] font-semibold pb-5'>{item.recipe}</p>
                  </div>
                  {/* price and add to cart option */}
                  <div className='flex w-full items-center justify-between mt-auto'>
                    <p className='text-xl font-bold'><span className='text-[#FF6868]'>$</span> <span>{item.price}</span></p>
                    <button onClick={handleAddToCart} className='btn bg-green text-white'>Add to Cart</button>
                  </div>
                  </div>
  )
}

export default Item