import React from 'react';

const BannerTXT = () => {
    return (
        <div className="absolute rounded-xl flex gap-6 justify-start items-center pl-10 pt-40 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
        <div className='text-white space-y-7 p-5'>
            <h1 className='text-6xl my-6 font-bold '>Affordable <br /> Price For Car <br /> Servicing</h1>
            <p className='my-6'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
            <div>
                <button className='btn btn-primary mr-5'>Discover More</button>
                <button className='btn btn-outline btn-secondary'>Latest Project</button>
            </div>
        </div>
    </div>
    );
};

export default BannerTXT;