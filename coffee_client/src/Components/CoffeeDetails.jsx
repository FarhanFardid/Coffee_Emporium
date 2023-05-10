import { useLoaderData } from "react-router-dom";


const CoffeeDetails = () => {
    const loadedCoffee = useLoaderData();
    console.log(loadedCoffee);
    const {_id,name,price,photo_url,supplier,category,details} = loadedCoffee;
    return (
        
<div className="flex flex-col items-center bg-slate-500 border border-gray-200 rounded-lg shadow md:flex-row  w-full p-20  justify-between">
   <div className="ms-32" > <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={photo_url} alt="coffee photo"/></div>
    <div className="flex flex-col text-gray-900 justify-between p-4 leading-normal me-36 ">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        <p className="mb-3 font-medium "><span className="font-bold">Product Id:</span> {_id} </p>
        <p className="mb-3 font-medium "><span className="font-bold">Supplier:</span> {supplier} </p>
        <p className="mb-3 font-medium "><span className="font-bold">Category:</span> {category} </p>
        <p className="mb-3 font-medium "><span className="font-bold">Details:</span> {details} </p>
        <p className="mb-3 font-medium "><span className="font-bold">Price:</span> {price} </p>
       
    </div>
</div>

    );
};

export default CoffeeDetails;