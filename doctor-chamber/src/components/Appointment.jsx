import React from 'react';

const Appointment = ({appo}) => {
    const {name,phone,email,date,department} = appo

    return (
       
            
               <table>
                <tr className='tr'>
                    <th>{name}</th>
                    <th>{phone}</th>
                    <th>{email}</th>
                    <th>{department}</th>
                    <th>{date}</th>
                    <th className='pay'>Pay</th>
                </tr>
               </table>
            
        
    );
};

export default Appointment;