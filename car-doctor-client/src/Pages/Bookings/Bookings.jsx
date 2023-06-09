import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import BookingRow from './BookingRow';
import { useNavigate } from 'react-router-dom';

const Bookings = () => {
    const [bookings, setBookings] = useState([])
    const { user } = useContext(AuthContext)


    const handleDelete = id => {
        const proceed = confirm('Are you Sure you want to delete')
        if (proceed) {
            fetch(`https://car-doctor-server-teal.vercel.app/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Deleted successful')
                        const remaining = bookings.filter(booking => booking._id !== id);
                        setBookings(remaining)
                    }
                })
        }
    }

    const handleBookingConfirm = id => {
        fetch(`https://car-doctor-server-teal.vercel.app/bookings/${id}` , {
            method: 'PATCH',
            headers : {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({status : 'confirm'})
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount !== 0) {
                    // update state
                    const remaining = bookings.filter(booking =>booking._id !== id)
                    const updated = bookings.find(booking => booking._id === id)
                    updated.status('confirm')
                    const newBooking = [updated , ...remaining]
                    setBookings(newBooking)
                }
            })
    }



    const navigate = useNavigate()

    const url = `https://car-doctor-server-teal.vercel.app/bookings?email=${user?.email}`

    useEffect(() => {
        fetch(url,{
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('car-access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (!data.error) {
                    
                    setBookings(data)
                }else{
                    // logout and then navigate
                    navigate('/')
                }
            })
    }, [url,navigate])

    return (
        <div className='my-20'>
            <h2 className=' text-5xl'>Your bookings: {bookings.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <BookingRow 
                                key={booking._id} handleDelete={handleDelete}
                                handleBookingConfirm={handleBookingConfirm} booking={booking} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;