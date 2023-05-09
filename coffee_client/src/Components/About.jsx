import React from 'react';
import aboutImg from '../assets/images/aboutImg.jpg'

const About = () => {
    const aboutStyle ={
        backgroundImage: `url(${aboutImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',

    }
    return (
        <div style={aboutStyle} className='text-slate-950 text-blue-400 p-44'>
                <article className='glass opacity-80 p-5 rounded-lg text-white'>
      <h1 className='text-2xl text-center p-3 text-black font-semibold'>About Coffee Espresso Emporium</h1>
      <p className='p-2 font-medium'>Coffee Espresso Emporium is a coffee shop located in the heart of the city, serving the best coffee and espresso drinks around. We take pride in our craft and use only the finest, responsibly-sourced beans to create our signature blends.</p>
      <p className='p-2 font-medium'>Our cozy shop is the perfect place to relax, catch up with friends, or get some work done. We offer free Wi-Fi and plenty of comfortable seating options. Our friendly and knowledgeable staff is always on hand to help you choose the perfect drink or pastry.</p>
      <h2 className='text-xl text-center p-2 text-black font-bold'>Our Story</h2>
      <p className='p-2 font-medium'>Coffee Espresso Emporium was founded in 2010 by coffee aficionado John Smith. After years of traveling the world in search of the perfect cup of coffee, John decided to bring his love of coffee to his hometown. He opened the first Coffee Espresso Emporium in a small storefront in downtown, and it quickly became a local favorite.</p>
      <p>Since then, we've expanded to several locations throughout the city, but we still believe in the same principles that guided us from the beginning: quality, sustainability, and community. We're committed to using only the best ingredients and giving back to the communities that support us.</p>
      <h2 className='text-xl text-center p-2 text-black font-bold'>Our Menu</h2>
      <p className='p-2 font-medium'>We offer a wide variety of coffee and espresso drinks, including our signature espresso blend, cappuccinos, lattes, and cold brews. We also have a selection of loose-leaf teas and hot chocolate for those who prefer something non-caffeinated. And don't forget to try one of our delicious pastries or breakfast sandwiches!</p>
      <p>At Coffee Espresso Emporium, we believe that coffee is more than just a drink - it's an experience. We hope you'll come visit us soon and see what we mean.</p>
    </article>
        </div>
    );
};

export default About;