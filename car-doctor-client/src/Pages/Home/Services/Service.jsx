import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
  const { title, img, price, _id } = service
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{title}</h2>
        <div className='flex text-orange-500'>
          <p className='text-xl'>Price : ${price}</p>
          <Link to={`/book/${_id}`}><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
          </span></Link>
        </div>

      </div>
    </div>
  );
};

export default Service;