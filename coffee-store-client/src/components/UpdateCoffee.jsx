import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { name, quantity, _id, supplier, taste, category, details, photo } = coffee;


    const handleUpdateCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = {name,quantity,supplier,taste,category,details,photo}
        console.log(updatedCoffee);

        //send data to the server
        fetch(`http://localhost:5000/coffee/${_id}`,{
            method : 'PUT',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(updatedCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                Swal.fire({
                    title : 'Success!',
                    text : 'Coffee Updated Successfully',
                    icon : 'success',
                    confirmButtonText : 'Cool'
                })
            }
        })
    }


    return (
        <div className='bg-[#F4F3F0]  max-w-full p-24'>
            <h2 className='text-3xl font-bold'>Update   Coffee  : {name}</h2>
            <form onSubmit={handleUpdateCoffee}>
                {/* Form name and quantity Row */}
                <div className='flex mb-8 gap-4'>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Coffee Name</span>
                    </label>
                    <label className="input-group">
                        <span className='w-[120px]'>Name</span>
                        <input defaultValue={name} name='name' type="text" placeholder="Coffee Name" className="input w-full input-bordered" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                    <label className="input-group">
                        <span className='w-[120px]'>Quantity</span>
                        <input defaultValue={quantity} name='quantity' type="text" placeholder="Availalbe Quantity" className="input w-full input-bordered" />
                    </label>
                </div>
                </div>
                {/* Form suppier and taste Row */}
                <div className='flex mb-8 gap-4'>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Supplier</span>
                    </label>
                    <label className="input-group">
                        <span className='w-[120px]'>Supplier</span>
                        <input defaultValue={supplier} name='supplier' type="text" placeholder="Supplier Name " className="input w-full input-bordered" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Taste</span>
                    </label>
                    <label className="input-group">
                        <span className='w-[120px]'>Taste</span>
                        <input defaultValue={taste} name='taste' type="text" placeholder="Taste" className="input w-full input-bordered" />
                    </label>
                </div>
                </div>
                {/* Form category and details Row */}
                <div className='flex mb-8 gap-4'>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <label className="input-group">
                        <span className='w-[120px]'>Category</span>
                        <input defaultValue={category} name='category' type="text" placeholder="Category" className="input w-full input-bordered" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Details</span>
                    </label>
                    <label className="input-group">
                        <span className='w-[120px]'>Details</span>
                        <input defaultValue={details} name='details' type="text" placeholder="Details" className="input w-full input-bordered" />
                    </label>
                </div>
                </div>
                {/* Form Photo url Row */}
                <div>
                <div className="form-control mb-8 md:w-ful ml-4">
                    <label className="label">
                        <span className="label-text">Photo Url</span>
                    </label>
                    <label className="input-group">
                        <span className='w-[110px]'>Photo Url</span>
                        <input defaultValue={photo} name='photo' type="text" placeholder="Photo Url" className="input w-full input-bordered" />
                    </label>
                </div>
                </div>
                <input className='btn font-serif italic btn-block bg-[#D2B48C] hover:bg-orange-300' type="submit" value="Add Coffee" />
            </form>
        </div>
    );
};

export default UpdateCoffee;