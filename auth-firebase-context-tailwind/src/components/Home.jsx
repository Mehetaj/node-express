import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';

const Home = () => {
    const {user} = useContext(AuthContext)
    console.log(user);
    return (
        <div>
            <h2>This is {user && <span>{user.name}</span>}</h2>
        </div>
    );
};

export default Home;