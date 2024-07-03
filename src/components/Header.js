import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsBag } from 'react-icons/bs';
import Logo from '../img/logo.svg';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';

const Header = () => {
  const [isActive, setIsActive] = useState(false); // Set to false initially
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`${
        isActive ? 'bg-pink-200 shadow-md' : 'bg-red-300'
      } fixed w-full z-10 transition-all`}
    >
      <div className="container p-8 flex mx-auto items-center justify-between h-[75px]">
      <div className='flex font-semibold'>
      <Link to="/">
          <img src={Logo} className="w-[40px]" alt="Logo" />
          <h2>Shop Now</h2>
        </Link>
      </div>
        
        <nav className="flex items-center">
          <ul className="flex space-x-6">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div
          onClick={toggleSidebar}
          className="cursor-pointer max-w-[50px] -bottom-2 text-[12px] w-[18px] flex justify-center items-center rounded-full flex relative"
        >
          <BsBag className="text-2xl" />
          <div className="bg-red-500 absolute -right-2 rounded-full text-xs px-2">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
