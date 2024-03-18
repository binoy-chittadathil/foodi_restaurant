import React, { useEffect, useState } from 'react';
import { FaTrash } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import axios from 'axios'

function AllUsers() {
  const [allUsers,setAllUsers]=useState([])
  useEffect(()=>{
    axios.get('/admin/users').then(({data})=>{
      setAllUsers(data)
    }).catch(err=>{
      console.log(err);
    })
  },[])
  return (
    <div className="overflow-x-auto mt-6">
      <div className='flex justify-between'>
        <h3>All Users</h3>
        <h3>Total Users: {allUsers.length}</h3>
      </div>
  <table className="table table-zebra mt-3">
    {/* head */}
    <thead>
      <tr className='bg-green text-white'>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th className='flex items-center justify-center'>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row */}
      {allUsers.map((user,index)=>(
        <tr key={index}>
        <th>{index+1}</th>
        <td>
          {user.name}
        </td>

        <td>
          {user.email}
        </td>

        <td className='flex items-center justify-center'>
        {user.role==='admin'
         ? 
         'Admin'
         : 
         <button className='btn btn-xs bg-primary text-white hover:text-green'>
          <FaUser />
          </button>
         }
        </td>

        <td>
          <button className='btn btn-xs bg-red-600 text-white hover:text-red-600'>
          <FaTrash />
          </button>
        </td>
      </tr>
      ))}
    </tbody>
  </table>
</div>
  )
}

export default AllUsers