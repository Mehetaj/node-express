import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-neutral text-neutral-content'>
            <div className="navbar bg-neutral text-neutral-content flex container mx-auto">
                <a className="btn btn-ghost normal-case text-xl">Auth Master Recap</a>
                <div>
                <Link className="btn btn-ghost normal-case text-xl" to="/">Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/login">Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/register">Register</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;