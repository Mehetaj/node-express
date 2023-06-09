import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Main = () => {
    return (
        <div className='outlet-container'>
            <div>
            <Header/>
            <Outlet/>
            </div>
        </div>
    );
};

export default Main;