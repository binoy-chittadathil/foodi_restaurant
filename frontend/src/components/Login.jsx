import React from 'react';
import { IoMdClose } from "react-icons/io";
import LoginForm from './LoginForm';

function Login() {
    return (
        <div>
            {/* modal(pop up window) */}
            <dialog id="my_modal_5" className="modal modal-middle">
                <div className="modal-box">
                    <div className='flex justify-end'>
                    <button className='p-1 rounded-full hover:bg-red-600 bg-green text-white text-lg ' onClick={() => document.getElementById('my_modal_5').close()}><IoMdClose /></button>
                    </div>
                    <LoginForm/>
                </div>
            </dialog>
        </div>
    )
}

export default Login