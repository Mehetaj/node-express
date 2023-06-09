import React, { useContext } from 'react';
import { Link, UNSAFE_useScrollRestoration } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

const Header = () => {

    const {user,logOut} = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
        .then(() => {})
        .catch(error => console.log(error))
    }

    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
                <Link className="btn btn-ghost normal-case text-xl" to="/">Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/orders">Orders</Link>
                {user && <Link className="btn btn-ghost normal-case text-xl" to="/profile">Profile</Link>}
                <Link className="btn btn-ghost normal-case text-xl" to="login">Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/register">Register</Link>
                
                {
                    user ? <div>
                        <span>{user.email}</span>
                        <button onClick={handleLogOut} className='btn btn-xs'>Sign Out</button>
                    </div> : <span><Link to="/login">Login Now</Link></span>
                }
            </div>


        </div>
    );
};

export default Header;