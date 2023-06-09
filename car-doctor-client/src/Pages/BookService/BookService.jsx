import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const BookService = () => {

    const service = useLoaderData();
    const { title, _id, price, img } = service;
    const { user } = useContext(AuthContext)

    const handleBookService = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const booking = {
            customerName: name,
            email,
            date,
            service_id: _id,
            price: price,
            service: title,
            img
        }
        console.log(booking);

        fetch('https://car-doctor-server-teal.vercel.app/bookings/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('Service Book Succesfully')
                }
            })
    }

    return (
        <div>
            <h2 className='text-center text-3xl'>Book Service {title}</h2>
            <div className="hero min-h-screen  ">
                <div className="hero-content ">
                    <div className="">

                    </div>
                    <div className="">
                        <form onSubmit={handleBookService}>
                            <div className='w-[1000px]  grid grid-cols-1 md:grid-cols-2 gap-6'>
                                <div className="">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input
                                        defaultValue={user?.displayName}
                                        name='name' type="text" placeholder="name" className="input input-bordered w-[400px]" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Date</span>
                                    </label>
                                    <input
                                        name='date'
                                        type="date" placeholder="Date" className="input input-bordered w-[400px]" />
                                </div>
                            </div>
                            <div className='w-[1000px]  grid grid-cols-1 md:grid-cols-2 gap-6'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        defaultValue={user?.email}
                                        type="email"
                                        name='email' placeholder="email" className="input input-bordered w-[400px]" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Due Amount</span>
                                    </label>
                                    <input
                                        disabled
                                        name='price'
                                        defaultValue={' $ ' + price}
                                        type="text" placeholder="amount" className="input input-bordered w-[400px]" />
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Order Confirm" className="btn btn-primary" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookService;