import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const CoffeeCard = ({coffee,coffees,setCoffees}) => {
   const {_id,name,price,photo_url,supplier} = coffee;
   const handleDelete = id =>{
    console.log(id)

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
    fetch(`http://localhost:5000/coffee/${id}`, {
        method:"DELETE",
     
    })
    .then(res => res.json())
    .then (data => {console.log(data)
    if(data.deletedCount>0){
        Swal.fire(
                'Deleted!',
                'Coffee is deleted',
                'success'
        )
        const remainingCoffees = coffees.filter(coffee=> coffee._id !== _id)
        setCoffees(remainingCoffees)
    }
    })
}})

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
  <Link to={`/coffeeDetails/${_id}`}><button  className="px-4 py-2 w-20 text-white rounded-md bg-slate-800 hover:bg-slate-700 ">Details</button></Link>
  <Link to={`/updateCoffee/${_id}`}><button className="px-4 py-2 text-blue-800 rounded-md w-20 bg-gray-900 hover:bg-gray-700 my-2">Update</button></Link>
 <Link> <button onClick={() => handleDelete(_id)} className="px-4 py-2 w-20 text-red-800 rounded-md bg-zinc-900 hover:bg-zinc-700">Delete</button></Link>
</div>
          </div>
        
      </div>
    );
};

export default CoffeeCard;