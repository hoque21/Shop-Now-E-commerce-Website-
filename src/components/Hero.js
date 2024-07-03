import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import WomenImg from '../img/woman_hero.png';

const Hero = () => {
  return (
    <section className='bg-pink-300 bg-no-repeat bg-cover bg-center py-24 h-[800px] bg-hero'>
      <div className='container mx-auto flex justify-around h-full'>
        <div className='flex flex-col justify-center'>
          <div className='font-semibold  items-center uppercase'>
            <div className='mr-3 item-center' style={{ fontStyle: 'italic' }}>
              New Trend
            </div>
            <h1 className='text-[70px] leading-[1.1] font-light mb-4'>AUTUMN SALE STYLISH <br/>
              <span className='font-semibold'>WOMENS</span>
            </h1>
            {/* Use Link to link to the product page */}
            <Link to="/product" className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
              Get Started
            </Link>
          </div>
        </div>
        <div className='lg:black'>
          <img src={WomenImg} alt='Women' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
