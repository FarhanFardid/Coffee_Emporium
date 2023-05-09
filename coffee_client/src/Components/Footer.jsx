
import bg from '../assets/images/bg-1.jpg'
const Footer = () => {
    const footerStyle = {
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      };
    return (
      
      
            <footer className="bg-slate-950 pt-10" style={footerStyle}>
              <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
                <div className="p-5 w-full sm:w-1/2 md:w-3/12">
                  <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                    Contact Us
                  </div>
                  <a className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700" href="tel:1234567890">
                    123-456-7890
                  </a>
                  <a className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700" href="mailto:info@coffeeemporium.com">
                    info@coffeeemporium.com
                  </a>
                </div>
        
                <div className="p-5 w-full sm:w-1/2 md:w-3/12">
                  <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                    Quick Links
                  </div>
                  <a className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700" href="#">
                    About Us
                  </a>
                  <a className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700" href="#">
                    Blog
                  </a>
                  <a className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700" href="#">
                    FAQ
                  </a>
                </div>
        
                <div className="p-5 w-full sm:w-1/2 md:w-3/12">
                  <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                    Social Media
                  </div>
                  <a className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700" href="#">
                    Facebook
                  </a>
                  <a className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700" href="#">
                    Twitter
                  </a>
                  <a className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700" href="#">
                    Instagram
                  </a>
                </div>
        
                <div className="p-5 w-full sm:w-1/2 md:w-3/12">
                  <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                    Address
                  </div>
                  <p className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                    123 Main Street
                    <br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
        
              <div className="pt-2 mx-auto">
                <div className=" pb-5 px-3 m-auto pt-5 
                                  border-t border-gray-500 text-gray-400 text-sm 
                                  flex-col sm:flex-row max-w-6xl text-center">
                  <div className="mt-2  ">
                    <p className="text-gray-400  font-bold">© {new Date().getFullYear()} Coffee Espresso Emporium. All Rights Reserved.</p>
                  </div>
        </div> 
 </div>                
</footer> 
    );
};


export default Footer;