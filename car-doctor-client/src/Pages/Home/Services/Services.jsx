import React, { useEffect, useRef, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([])
    const [asc, setAsc] = useState(true)
    const searchRef = useRef(null);
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch(`http://localhost:5000/services?search=${search}&sort=${asc ? 'asc' : 'desc'}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setServices(data)
            })
    }, [asc,search])


    const handleSearch = () => {
        console.log(searchRef.current.value);
        setSearch(searchRef.current.value)
    }

    return (
        <div className='my-4'>
            {/* Title of services */}
            <div className='text-center'>
                <h2 className='text-2xl mb-4 font-bold text-orange-600'>Our Services</h2>
                <h2 className='text-5xl mb-4 '>Our Service Area</h2>
                <p className='text-gray-600'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
                <div className="form-control mx-auto">
                    <div className="input-group">
                        <input ref={searchRef} type="text" placeholder="Search…" className="input input-bordered" />
                        <button onClick={handleSearch} className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
                <button className='btn btn-primary my-6' onClick={() => setAsc(!asc)}>{asc ? 'Price high to low' : 'Price low to high'}</button>
            </div>

            {/* Main service body */}

            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;