import React from 'react';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

const LoginHeader = () => {
    return (
        <div className=''>
            <div className=''>
            <div className='container mx-auto flex justify-between items-center mt-6'>
            <img  className='logo' src={logo} alt="" />
            <label className='input-group ml-96'>
            <span className='text-black'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>

            </span>
            <input  className='nav-search px-2 border bg-gray-500' placeholder='Search your Destination...' type="text" name="" id="" />
            </label>

            <div className='flex text-gray-900 items-center'>
                <Link>News</Link>
                <Link>Destination</Link>
                <Link>Blog</Link>
                <Link>Contact</Link>
                <Link to="/login"><button>Login</button></Link>
            </div>
        </div>
        </div>
        </div>
    );
};

export default LoginHeader;