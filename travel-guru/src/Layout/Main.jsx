import React from 'react';
import Header from '../Component/Header';
import { Outlet } from 'react-router-dom';
import bg from '../assets/images/bg.png'

const Main = () => {
    return (
        <div className='min-h-screen relative bg-cover bg-center flex justify-center items-center' style={{ backgroundImage: `url(${bg})` }}>
            <div className='bg-black opacity-60  min-h-full w-full absolute object-contain '>
                <Header />
                <Outlet />
            </div>
        </div>
    );
};

export default Main;