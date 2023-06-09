import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1><span><Link to="/">Home</Link></span> <span><Link to="/login">Login</Link></span></h1>
           
        </div>
    );
};

export default Header;