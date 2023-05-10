import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {
    const loadedCoffeeInfo = useLoaderData();
    console.log(loadedCoffeeInfo);
    const {_id,name,price,photo_url,supplier,category,details} = loadedCoffeeInfo;
    const handleUpdateCoffee = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const supplier = form.supplier.value;
        const price= form.price.value;
        const category= form.category.value;
        const details= form.details.value;
        const photo_url= form.photo_url.value;
        const coffee = {name,supplier,price,category,details,photo_url};
        console.log(coffee);
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "PUT",
          headers:{
            "content-type" : 'application/json'
          },
          body:JSON.stringify(coffee)
        })
        .then (res => res.json())
        .then(data => {console.log(data)
       
        if(data.modifiedCount>0){
        
          Swal.fire({
            title: 'Success!',
            text: 'Coffee Info Updated',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
      })
      }
    return (
        <div>
        <h5 className="text-2xl text-center font-bold p-4 bg-slate-700 text-slate-900">Update Existing Coffee Details</h5>
        <form onSubmit={handleUpdateCoffee} className="row grid grid-cols-2 gap-2 p-20 bg-slate-500">
<div className=" p-2"><label htmlFor="name" className="block p-1 font-medium">Name:</label>
<input type="text" id="name" name="name" defaultValue={name} placeholder="Enter Coffee Name" className="input input-bordered w-full  " /><br /></div>
<div className="p-2">  <label htmlFor="supplier" className="block p-1 font-medium">Supplier:</label>
<input type="text" id="supplier" name="supplier" defaultValue={supplier} placeholder="Enter Coffee Supplier" className="input input-bordered w-full" /><br /></div>

<div className="p-2"><label htmlFor="price" className="block p-1 font-medium">Price:</label>
<input type="text" id="taste" name="price" defaultValue={price} placeholder="Enter Coffee Taste" className="input input-bordered w-full " /><br /></div>

<div className="p-2"><label htmlFor="category" className="block p-1 font-medium">Category:</label>
<input type="text" id="category" name="category" defaultValue={category} placeholder="Enter Coffee Category" className="input input-bordered w-full " /><br /></div>

<div className="p-2">  <label htmlFor="details" className="block p-1 font-medium">Details:</label>
<input type="text" id="details" name="details" defaultValue={details} placeholder="Enter Coffee Details" className="input input-bordered w-full " /><br /></div>

<div className="p-2">  <label htmlFor="photo_url" className="block p-1 font-medium">Photo URL:</label>
<input type="text" id="photo_url" name="photo_url" defaultValue={photo_url} placeholder="Enter Coffee Photo" className="input input-bordered w-full" /><br /></div>

<div className="col-span-2 p-2 mt-5"> <input className="btn w-full font-bold text-sm hover:bg-slate-800" type="submit" value="Update Coffee" /></div>


</form>

        
    </div>
    );
};

export default UpdateCoffee;