import React from 'react';
import LoginHeader from './LoginHeader';
import { Link } from 'react-router-dom';
import Popup from './Popup';

const Login = () => {
    return (
        <div className=''>
            <LoginHeader />

            <div className='flex justify-center items-center mt-[150px]'>
                <form className='login-container'>
                    <h2 className='text-xl font-bold'>Login</h2>

                    <div className="relative z-0 w-full mt-[54px] mb-[55px] group">
                        <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFom="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Username or Email</label>
                    </div>
                    <div className="relative z-0 w-full mt-[54px] mb-[45px] group">
                        <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFom="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Passowrd</label>
                    </div>
                    <div className='flex justify-between'>
                        <span><input type="checkbox" name="" value="Remember Me" id="" /><span className='font-bold ml-2'>Remember Me</span></span>
                        <Link className=' text-yellow-500 underline'>Forgot Password</Link>
                    </div>
                    <input className='submit' type="submit" value="Login" />
                    <div className='w-[290px] mt-2 font-bold text-center mx-auto'>
                        <small className='flex'>
                            <p>Don't have an account?</p>
                            <Link to="/signup" className=' -ml-[1px] text-yellow-400 underline'>Create New Account</Link>
                        </small>
                    </div>
                </form>
            </div>


            <div className='flex items-center gap-4 mt-6 justify-center'>
                <div className='bt'></div>
                <div>Or</div>
                <div className='bt'></div>
            </div>


            <div className='ml-10'>
            <Popup />
            </div>



        </div>
    );
};

export default Login;