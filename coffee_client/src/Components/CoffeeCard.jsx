import React from 'react';
import { Link } from 'react-router-dom';

const CoffeeCard = ({coffee}) => {
   const {_id,name,price,photo_url,supplier} = coffee;
   const handleDetails = id =>{
    console.log(id)

   }

    return (
        <div className="card card-side  shadow-xl w-full h-60 flex items-center justify-center content-evenly">
        <figure><img src={photo_url} className='w-52 h-48 p-1' alt="coffee"/></figure>
        <div className="card-body p-2">
          <h2 className="card-title">{name}</h2>
          <p><span className='font-bold'>Supplier:</span> {supplier}</p>
          <p><span className='font-bold'>Price:</span> {price}</p>
          </div>
          <div className="card-actions justify-end">
          <div className="btn-group btn-group-vertical p-5 text-white">
  <Link to={`/coffeeDetails/${_id}`}><button onClick={() => handleDetails(_id)} className="px-4 py-2 w-20 text-white rounded-md bg-slate-800 hover:bg-slate-700 ">Details</button></Link>
  <Link><button className="px-4 py-2 text-blue-800 rounded-md w-20 bg-gray-900 hover:bg-gray-700 my-2">Update</button></Link>
 <Link> <button className="px-4 py-2 w-20 text-red-800 rounded-md bg-zinc-900 hover:bg-zinc-700">Delete</button></Link>
</div>
          </div>
        
      </div>
    );
};

export default CoffeeCard;