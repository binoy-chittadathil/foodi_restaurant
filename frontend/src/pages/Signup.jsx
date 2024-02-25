import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoMdClose } from 'react-icons/io';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
    const [redirect, setRedirect] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [ready, setReady] = useState(false);

    //handle signup form
    function handleSignupForm(ev) {
        ev.preventDefault();
        const signupData = { name, email, password };
        if (password === confirmPassword) {
            axios.post('http://localhost:3000/signup', signupData).then(({ data }) => {
                toast.success('Successfully registered');
                setName('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
                setReady(true);
            }).catch(err => {
                toast.error('registration failed');
            })
        } else {
            toast.error('Password not match')
        }
    };

    //handle re-render to login when the signup successfull ---start
    function handleLogin() {
        if (ready) {
            document.getElementById('my_modal_5').showModal();
            setReady(false)
        }
    }
    useEffect(() => {

        handleLogin();

    }, [ready]);
    //handle re-render to login when the signup successfull ---end


    useEffect(() => {
        if (redirect) {
            window.history.back()
        }
    }, [redirect])
    return (
        
        <div className='pt-24 flex flex-col items-center'>
            
            <ToastContainer position='top-center' />

            <div className=' fixed right-0 mr-5'>
                <button className='p-1 rounded-full hover:bg-red-600 bg-slate-300 text-black hover:text-white text-lg ' onClick={() => setRedirect(true)}><IoMdClose /></button>
            </div>
            <div className="modal-action flex flex-col sm:w-1/2 lg:w-1/3 mt-5 shadow-2xl border p-7 rounded-2xl mx-auto">
                {/* signup form field */}
                <form id='signup_form' name='login_form' className="card-body p-0 px-5" onSubmit={handleSignupForm}>
                    <h3 className='text-xl font-semibold'>Create Account!</h3>

                    <div className="form-control">
                        <label className="label" htmlFor='signup_name'>
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" id='signup_name' name='name'
                            autoComplete='on' placeholder="Your name"
                            className="input input-bordered" required
                            value={name} onChange={(ev) => setName(ev.target.value)} />
                    </div>

                    <div className="form-control">
                        <label className="label" htmlFor='signup_email'>
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" id='signup_email' name='email'
                            autoComplete='on' placeholder="Email"
                            className="input input-bordered" required
                            value={email} onChange={(ev) => setEmail(ev.target.value)} />
                    </div>

                    <div className="form-control">
                        <label className="label" htmlFor='signup_password'>
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" id='signup_password' name='password'
                            autoComplete='off' placeholder="Password"
                            className="input input-bordered" required
                            value={password} onChange={(ev) => setPassword(ev.target.value)} />
                    </div>

                    <div className="form-control">
                        <label className="label" htmlFor='signup_cpassword'>
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input type="password" id='signup_cpassword' name='cpassword'
                            autoComplete='off' placeholder="Re-Enter password"
                            className="input input-bordered" required
                            value={confirmPassword} onChange={(ev) => setConfirmPassword(ev.target.value)} />
                    </div>

                    <div className="form-control mt-6">
                        <button onClick={handleLogin} className="btn bg-green text-white hover:text-black">Sign Up</button>
                    </div>
                    <p className='text-center text-sm'>All ready have an account? <span onClick={() => document.getElementById('my_modal_5').showModal()} className='text-[#FF6868] font-semibold cursor-pointer hover:underline'>Login</span></p>
                </form>
                {/* email signup button and facebook signup button */}
                <div className='mt-5 flex items-center justify-center gap-5'>
                    <button className='btn btn-circle'><FaGoogle /></button>
                    <button className='btn btn-circle'><FaFacebookF /></button>
                </div>
            </div>
        </div>
    )
}

export default Signup