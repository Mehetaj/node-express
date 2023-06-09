import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Appointment from './Appointment';

const Appointments = () => {

    const appointments = useLoaderData()

    return (
        <div className='appo-container'>
            <div>
                <h1 className='text-center'>Here are your Appointment Laters</h1>



                <table>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Department</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </table>

                <div>
                    {
                        appointments.map(appo => <Appointment key={appo._id} appo={appo}></Appointment>)
                    }
                </div>



            </div>
        </div>
    );
};

export default Appointments;