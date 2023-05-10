import { useLoaderData } from "react-router-dom";
import bannerImg from "../assets/images/Banner-1.png";
import cup_1 from "../assets/images/cup-1.png";
import cup_2 from "../assets/images/cup-2.png";
import cup_3 from "../assets/images/cup-3.png";
import cup_4 from "../assets/images/cup-4.png";
import cup_5 from "../assets/images/cup-5.png";
import cup_6 from "../assets/images/cup-6.png";
import cup_7 from "../assets/images/cup-7.png";
import cup_8 from "../assets/images/cup-8.png";
import icon_1 from '../assets/images/icon-1.png';
import icon_2 from '../assets/images/icon-2.png';
import icon_3 from '../assets/images/icon-3.png';
import icon_4 from '../assets/images/icon-4.png';
import CoffeeCard from "./CoffeeCard";
import { useState } from "react";

const Home = () => {
  const loadedCoffees = useLoaderData();
  const [coffees,setCoffees] = useState(loadedCoffees)
  console.log(loadedCoffees);
  const bannerStyle = {
    backgroundImage: `url(${bannerImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div>
      <div className="" style={bannerStyle}>
        <div className="text-white p-36 ms-80 text-right ">
          <h4 className="text-3xl p-3 font-medium">
            Would you like a Cup of Delicious Coffee?
          </h4>
          <p className="p-4 text-slate-300">
            {" "}
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className="border-2 border-orange-950 px-3 py-2 rounded-lg bg-gray-400  focus:outline-none hover:bg-gray-800 hover:text-white  text-orange-950 m-4 md:m-4 font-semibold">
            Coffee Espresso Emporium
          </button>
        </div>
      </div>
      <section className='container-fluid  '>
      <h4 className="font-bold text-3xl text-center p-3 bg-slate-700 text-yellow-700">
           Featured Coffees
        </h4>
    <div className='row grid grid-rows-1 grid-cols-4 p-2 gap-2 bg-gray-400'>
    <div className="card  glass ">
  <figure><img src={icon_1} className="p-3" alt="icons!"/></figure>
  <div className="card-body text-center">
    <h2 className="card-title mx-auto font-bold">Awesome Aroma</h2>
    <p>You will definitely be a fan of the design & aroma of your coffee</p>
    
  </div>
</div>
    <div className="card  glass">
  <figure><img src={icon_2} className="p-3" alt="icons!"/></figure>
  <div className="card-body text-center">
    <h2 className="card-title mx-auto font-bold">High Quality</h2>
    <p>We served the coffee to you maintaining the best quality</p>
    
  </div>
</div>
    <div className="card  glass">
  <figure><img src={icon_3} className="p-3" alt="icons!"/></figure>
  <div className="card-body text-center">
    <h2 className="card-title mx-auto font-bold">Pure Grades</h2>
    <p>The coffee is made of the green coffee beans which you will love</p>
    
  </div>
</div>
    <div className="card glass">
  <figure><img src={icon_4} className="p-3" alt="icons!"/></figure>
  <div className="card-body text-center">
    <h2 className="card-title mx-auto font-bold">Proper Roasting</h2>
    <p>Your coffee is brewed by first roasting the green coffee beans</p>
    
  </div>
</div>

    </div>
 </section>
 <section className='container-fluid'>
  <h5 className="text-3xl font-bold p-2 text-center">Our Popular Products</h5>
  <div className='row grid grid-rows-2 grid-cols-2 p-2 gap-2 bg-gray-400'>
    {
      coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees}
      setCoffees={setCoffees}> </CoffeeCard>)
    }
  </div>

 </section>
      <section className='container-fluid '>
      <h4 className="font-semibold text-3xl text-center p-3 bg-slate-900 text-red-700">
          Hot Coffees
        </h4>
    <div className='row grid grid-rows-1 grid-cols-4 p-2 gap-2 bg-gray-700'>
    <div className='w-100'><img className='w-72 h-72' src={cup_1} alt="coffee cups" /></div>
    <div className='w-100'><img className='w-72 h-72' src={cup_2} alt="coffee cups" /></div>
    <div className='w-100'><img className='w-72 h-72' src={cup_4} alt="coffee cups" /></div>
    <div className='w-100'><img className='w-72 h-72' src={cup_7} alt="coffee cups" /></div>
    <div className='w-100'><img className='w-72 h-72' src={cup_8} alt="coffee cups" /></div>
    <div className='w-100'><img className='w-72 h-72' src={cup_3} alt="coffee cups" /></div>
    <div className='w-100'><img className='w-72 h-72' src={cup_6} alt="coffee cups" /></div>
    <div className='w-100'><img className='w-72 h-72' src={cup_5} alt="coffee cups" /></div>
    </div>
 </section>
    </div>
  );
};

export default Home;
