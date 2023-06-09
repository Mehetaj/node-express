import React from 'react';
import img from '../assets/tip-image.jpg'

const Home = () => {


    const handleAppointment = e => {
        e.preventDefault()
        const form = e.target;
        const department = form.department.value
        const name = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const date = form.date.value;
        const newAppontment = {name,phone,email,date , department}
        console.log(newAppontment);

        fetch('http://localhost:5000/appointments' , {
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(newAppontment)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }

    return (
        <div className='home-container'>
            <div className=''>
                <h2>Todays Tip from Dr. Hanman</h2>
                <img src={img} alt="" />
            </div>
            <div>
                <div className='tip'>
                    <h2>Book an Appointment</h2>
                </div>
                <form onSubmit={handleAppointment}>
                    <select name="department" id="">
                        <option value="Select Department">Select Department</option>
                        <option value="Diabetics">Diabetics</option>
                        <option value="Pressure">Pressure</option>
                        <option value="Fever">Fever</option>
                        <option value="Headache">Headache</option>
                        <option value="Stomach">Stomach</option>
                    </select>

                    <input type="text" name='name' placeholder='Your Name' required />
                    <input type="number" name='phone' placeholder='Your Phone' required />
                    <input type="email" name='email' placeholder='Your email' required />
                    <input type="date" name='date' placeholder='' required />

                    <input className='submit' type="submit" value="Apply" />
                </form>
            </div>
        </div>
    );
};

export default Home;