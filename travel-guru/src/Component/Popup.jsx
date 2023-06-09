import React from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa'

const Popup = () => {
    return (
        <div>
            <div className='flex justify-center items-center mt-5'>
                <div>
                    <div className='popup-login flex items-center'>
                        <FaFacebook className='w-[37px] h-[37px] ml-2 rounded-full'/>
                        <p className='mx-auto'>Continue With Facebook</p>
                    </div>
                    <div className='popup-login flex items-center mt-4'>
                        <FaGoogle className='w-[37px] h-[37px] ml-2 rounded-full'/>
                        <p className='mx-auto'>Continue With Google</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popup;