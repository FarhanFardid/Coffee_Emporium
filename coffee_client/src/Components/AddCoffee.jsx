

const AddCoffee = () => {
    return (
        <div>
            <h5 className="text-2xl text-center font-bold p-4 bg-gray-600 text-slate-900">Add New Coffee</h5>
            <form className="row grid grid-cols-2 gap-2 p-20 bg-gray-400">
  <div className=" p-2"><label htmlFor="name" className="block p-1 font-medium">Name:</label>
  <input type="text" id="name" name="name" placeholder="Enter Coffee Name" className="input input-bordered w-full  " /><br /></div>
<div className="p-2">  <label htmlFor="supplier" className="block p-1 font-medium">Supplier:</label>
  <input type="text" id="supplier" name="supplier" placeholder="Enter Coffee Supplier" className="input input-bordered w-full" /><br /></div>

  <div className="p-2"><label htmlFor="taste" className="block p-1 font-medium">Taste:</label>
  <input type="text" id="taste" name="taste" placeholder="Enter Coffee Taste" className="input input-bordered w-full " /><br /></div>
  
  <div className="p-2"><label htmlFor="category" className="block p-1 font-medium">Category:</label>
  <input type="text" id="category" name="category" placeholder="Enter Coffee Category" className="input input-bordered w-full " /><br /></div>
  
  <div className="p-2">  <label htmlFor="details" className="block p-1 font-medium">Details:</label>
  <input type="text" id="details" name="details" placeholder="Enter Coffee Details" className="input input-bordered w-full " /><br /></div>

  <div className="p-2">  <label htmlFor="photo_url" className="block p-1 font-medium">Photo URL:</label>
  <input type="text" id="photo_url" name="photo_url" placeholder="Enter Coffee Photo" className="input input-bordered w-full" /><br /></div>

<div className="col-span-2 p-2 mt-5"> <input className="btn w-full font-bold text-sm hover:bg-slate-800" type="submit" value="Add Coffee" /></div>
  

</form>

            
        </div>
    );
};

export default AddCoffee;