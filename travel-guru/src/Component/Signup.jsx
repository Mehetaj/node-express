import React, { useContext, useState } from 'react';
import LoginHeader from './LoginHeader';
import { Link } from 'react-router-dom';
import Popup from './Popup';
import { AuthContext } from '../context/AuthProvider';



const Signup = () => {
    const [error, setError] = useState('')

    const { createUser } = useContext(AuthContext);

    const handleSignUp = (e) => {
        setError('')
        e.preventDefault();
        const form = e.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(firstName, lastName, email, password, confirm);

        if (password !== confirm) {
            setError("Password Not Matched")
            return
        } else if (password < 6) {
            setError("Password Must be contain 6 Characters")
        }

        createUser(email,password)
        .then(result => {

        })
        .catch(err => console.log(err))

    }
    return (
        <div>
            <LoginHeader />
            <div className='flex justify-center items-center mt-8'>
                <form onSubmit={handleSignUp} className='signup-container'>
                    <h2 className='text-xl font-bold'>Create an Acccount</h2>

                    <div className="relative z-0 w-full mt-[54px] mb-[55px] group">
                        <input type="text" name="firstName" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFom="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First Name</label>
                    </div>
                    <div className="relative z-0 w-full mt-[54px] mb-[55px] group">
                        <input type="text" name="lastName" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFom="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last Name</label>
                    </div>
                    <div className="relative z-0 w-full mt-[54px] mb-[55px] group">
                        <input type="email" name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFom="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Username or Email</label>
                    </div>
                    <div className="relative z-0 w-full mt-[54px] mb-[45px] group">
                        <input type="password" name="password" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFom="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Passowrd</label>
                    </div>
                    <div className="relative z-0 w-full mt-[54px] mb-[45px] group">
                        <input type="password" name="confirm" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFom="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm Pasword</label>
                    </div>
                    <div className='flex justify-between'>
                        <span><input type="checkbox" name="" value="Remember Me" id="" /><span className='font-bold ml-2'>Remember Me</span></span>
                        <Link className=' text-yellow-500 underline'>Forgot Password</Link>
                    </div>
                    <p className='text-red-600'><small>{error}</small></p>
                    <input className='submit' type="submit" value="Login" />
                    <div className='w-[290px] mt-2 font-bold text-center mx-auto'>
                        <small className='flex'>
                            <p>Already have an Account?</p>
                            <Link to="/login" className=' -ml-1 text-yellow-400 underline'>Login</Link>
                        </small>
                       
                    </div>
                </form>
            </div>


            <div className='flex items-center gap-4 mt-6 justify-center'>
                <div className='bt'></div>
                <div>Or</div>
                <div className='bt'></div>
            </div>

            <Popup />
        </div>
    );
};

export default Signup;