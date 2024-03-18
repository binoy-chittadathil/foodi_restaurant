import React, { useContext, useEffect, useState } from 'react';
import { MdDelete } from "react-icons/md";
import { UserContext } from '../components/context/UserContextProvider';
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios';
import { CartContext } from '../components/context/CartContextProvider';
import Swal from 'sweetalert2'
import CartTableFooter from '../components/CartTableFooter';

function Cart() {
  const { user } = useContext(UserContext);
  const [ok, setOk] = useState(false);
  const { setCartData, cartData, quantity, setQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  //function for increasing cart quantity by clicking button
  async function increaseQuantity(cartId, cartQuant) {
    //increase cart quantity
    await axios.put(`/cart/${cartId}`, { quantity: cartQuant + 1 })
    // Fetch updated cart data after quantity increase
    const { data } = await axios.get('/cart');
    // Update cart data and quantity in the state
    setCartData(data);
  };

  //function for decreasing cart quantity by clicking button
  async function decreaseQuantity(cartId, cartQuant) {
    //decrease cart quantity
    if (cartQuant > 1) {
      await axios.put(`/cart/${cartId}`, { quantity: cartQuant - 1 });
    } else {
      await axios.put(`/cart/${cartId}`, { quantity: 1 });
    }
    // Fetch updated cart data after quantity increase
    const { data } = await axios.get('/cart');
    // Update cart data and quantity in the state
    setCartData(data);
  }

  //handle quantity change
  async function handleQuantityChange(ev, cartId) {
    let newQuantity = ev.target.value;

    //for updating quantity
    if (newQuantity < 1) {
      await axios.put(`/cart/${cartId}`, { quantity: 1 }).then(() => {
        setQuantity((prevQuantity) => ({
          ...prevQuantity,
          [cartId]: 1,
        }));
      });
      // Fetch updated cart data after quantity increase
      const { data } = await axios.get('/cart');
      // Update cart data and quantity in the state
      setCartData(data);
    } else {
      await axios.put(`/cart/${cartId}`, { quantity: newQuantity }).then(() => {
        console.log('quantity updated');
        setQuantity((prevQuantity) => ({
          ...prevQuantity,
          [cartId]: newQuantity,
        }));
      });
      // Fetch updated cart data after quantity increase
      const { data } = await axios.get('/cart');
      // Update cart data and quantity in the state
      setCartData(data);
    }
  };

  //delete cart items
  function deleteCartItem(cart) {
    const cartId = cart._id;

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn ml-5 bg-green text-white",
        cancelButton: "btn bg-red-600 text-white"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then(async (result) => {
      if (result.isConfirmed) {
        // delete request
        await axios.delete(`/cart/${cartId}`).then(() => {
          setOk(!ok);
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "One cart item has been deleted.",
            icon: "success"
          });
        }).catch(err => {
          alert('Some error occured, cart data not deleted')
        })

      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your cart is safe :)",
          icon: "error"
        });
      }
    });
  };

  // useEffect(()=>{
  //   if (!user) {
  //     navigate('/signup')
  //   }
  // },[user]);

  useEffect(() => {
    axios.get('/cart').then(({ data }) => {
      setCartData(data);
    });
  }, [ok]);

  if(cartData.length===0){
    return (
      <div className='flex flex-col items-center justify-center h-screen gap-5'>
        <p className='font-semibold'>Cart is empty. Please add products</p>
        <Link to={'/menu'} className='btn bg-green text-white hover:text-black'>Back to Menu</Link>
      </div>
    )
  }

  return (
    <div className='pt-24 px-8 md:px-20'>
      <div className='flex justify-center text-center my-20 text-5xl leading-snug md:text-6xl space-x-4 font-bold'>
        <h1><span>Items Added to The</span> <span className='text-green'> Cart</span></h1>
      </div>

      {/* cart table */}
      <div className="overflow-x-auto border-b">
        <table className="table">
          {/* head */}
          <thead className='text-lg bg-green text-white'>
            <tr>
              <th>SL</th>
              <th>Food</th>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className='text-md'>
            {/* row */}
            {cartData.map((cart, index) => (
              <tr key={index}>
                <td>
                  {index + 1}
                </td>
                <td>
                  <div className="flex items-center">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={cart.image} />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {cart.name}
                </td>
                <td className='flex'>
                  {/* cart quantity decrease button */}
                  <button className='rounded-full bg-green w-5 h-5 flex items-center
                   justify-center text-white hover:bg-slate-300 hover:text-black'
                    onClick={() => decreaseQuantity(cart._id, cart.quantity)}>-</button>

                  {/* cart quantity input field */}
                  <input type="number" value={quantity[cart._id] || 1}
                    onChange={(ev) => handleQuantityChange(ev, cart._id)}
                    className='w-10 text-center appearance-none overflow-hidden mx-2 border-none outline-none' />

                  {/* cart quantity increase button */}
                  <button className='rounded-full bg-green w-5 h-5 flex items-center
                   justify-center text-white hover:bg-slate-300 hover:text-black'
                    onClick={() => increaseQuantity(cart._id, cart.quantity)}>+</button>
                </td>
                <td>
                  ${cart.price * quantity[cart._id] || 0}
                </td>
                <td className='text-lg text-gray-400 hover:text-red-600 cursor-pointer' onClick={() => deleteCartItem(cart)}><MdDelete /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* cart footer */}
      <CartTableFooter/>
    </div>
  )
}

export default Cart