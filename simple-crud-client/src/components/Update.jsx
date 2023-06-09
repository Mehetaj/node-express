import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const loadedUser = useLoaderData()
    const handleUpdate = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const updatedUser = {name , email}
        console.log(name,email);
        fetch(`http://localhost:5000/users/${loadedUser._id}`, 
        {
            method : 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(updatedUser)
        }
        )
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data?.modifiedCount > 0) {
                alert('User Updated Successfully')
            }
        })
    }
    return (
        <div>
            <h3>Update information of Loaded User {loadedUser.name}</h3>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={loadedUser?.name} id="" />
                <br />
                <input defaultValue={loadedUser?.email} type="email" name='email' />
                <br />
                <input type="submit" value='Update' />
            </form>
        </div>
    );
};

export default Update;