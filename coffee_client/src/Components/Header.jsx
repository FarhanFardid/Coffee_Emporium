import { Link } from 'react-router-dom';
import bg_1 from '../assets/images/Navbar-1.jpg'
import logo from '../assets/images/logo1.png'
import bg from '../assets/images/bg-1.jpg'
const Header = () => {
    const headerStyle = {
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      };
    
      return (
        <header className="shadow text-white" style={headerStyle}>
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <img src={logo} alt="Logo" className="w-12 h-12 text-white p-1 bg-slate-700 rounded-full" />
              <span className="ml-3 text-2xl text-white">Coffee Espresso Emporium</span>
            </a>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center font-bold">
              <Link className="mr-5 hover:text-slate-500">Home</Link>
              <Link to="/about" className="mr-5 hover:text-slate-500">About</Link>
              <Link to="/addCoffee" className="mr-5 hover:text-slate-500">New Coffee</Link>
           
            </nav>
            <button className="inline-flex items-center bg-gray-600 text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-800 rounded text-base mt-4 md:mt-0 font-semibold">Order Now</button>
          </div>
        </header>
      );
        }
      
        


export default Header;