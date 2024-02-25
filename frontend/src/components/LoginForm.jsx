import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import axios from 'axios';
import { UserContext } from './context/UserContextProvider';


function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error,setError]=useState('');
    const { setUser,user } = useContext(UserContext);
    const navigate=useNavigate()

    //handle login form
    async function handleLoginForm(ev) {
        ev.preventDefault();
        const loginData = { email, password };
        try{
            const {data}=await axios.post('https://foodi-restaurant.onrender.com/login', loginData);
            setUser(data);
            alert('login successfull');
            setPassword('');
            setEmail('');
            document.getElementById('my_modal_5').close();
            navigate('/')
        }
        catch (error) {
            setError('Incorect password or email Id')
            console.error('Logout error:', error);
          }
    }
    return (
        <div className="modal-action flex flex-col" onClick={()=>setError('')}>
            <form id='login_form' name='login_form' className="card-body p-0 px-5" onSubmit={handleLoginForm}>
                <h3 className='text-xl font-semibold'>Please Login!</h3>

                <div className="form-control">
                    <label className="label" htmlFor='login_email'>
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" id='login_email' name='email'
                        autoComplete='on' placeholder="email" className="input input-bordered"
                        required value={email} onChange={(ev) => setEmail(ev.target.value)} />
                </div>

                <div className="form-control">
                    <label className="label" htmlFor='login_password'>
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" id='login_password' name='password'
                        autoComplete='on' placeholder="password" className="input input-bordered"
                        required value={password} onChange={(ev) => setPassword(ev.target.value)} />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    <p className='text-center text-sm text-red-600 italic'>{error}</p>
                </div>
                {/* login button */}
                <div className="form-control mt-6">
                    <button className="btn bg-green text-white hover:text-black">Login</button>
                </div>

                <p className='text-center text-sm'>Don't have an account? <Link to={'/signup'}
                    onClick={() => document.getElementById('my_modal_5').close()}
                    className='text-[#FF6868] hover:underline'>Signup Now</Link></p>
            </form>

            {/* email signup button and facebook signup button */}
            <div className='mt-5 flex items-center justify-center gap-5'>
                <button className='btn btn-circle'><FaGoogle /></button>
                <button className='btn btn-circle'><FaFacebookF /></button>
            </div>
        </div>
    )
}

export default LoginForm