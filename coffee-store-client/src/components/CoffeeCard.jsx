import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees , setCoffees }) => {
  // console.log(coffee);
  const { name, quantity, _id, supplier, taste, category, details, photo } = coffee
  const handleDelete = (_id) => {
    // console.log(_id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        console.log(_id);
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              const remaining = coffees.filter(cof => cof_id !== _id)
              setCoffees(remaining)
            }
          })
      }
    })
  }
  return (
    <div>
      <div className="card p-4 h-full card-side bg-base-100 shadow-xl">
        <figure><img src={photo} alt="Movie" /></figure>
        <div className="flex justify-between pr-4 w-full items-center">
          <div>
            <h2 className="card-title">Name : {name}</h2>
            <p>Quantity : {quantity}</p>
            <p>Supplier : {supplier}</p>
            <p>Taste : {taste}</p>
          </div>
          <div className="flex justify-end">
            <div className='btn-group btn-group-vertical space-y-4'>
              <button className='btn border-none bg-green-500'>View</button>
              <Link to={`/updatecoffee/${_id}`}><button className='btn border-none bg-yellow-500'>Edit</button></Link>
              <button onClick={() => handleDelete(_id)} className='btn border-none bg-red-500'>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;