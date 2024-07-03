import React, { useContext } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { IoMdArrowForward } from 'react-icons/io';
import { CartContext } from '../contexts/CartContext';
import { CartItem } from '../components/CartItem'; 
import { FiTrash2 } from 'react-icons/fi';

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart } = useContext(CartContext);

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach(item => {
      totalPrice += item.price * item.amount;
    });
    return parseFloat(totalPrice.toFixed(2));
  };

  const handleOrderNow = () => {
    // Handle the order process here, such as sending the cart items to the server
    // You can implement your logic for order processing
    alert('Order placed successfully!');
  };

  return (
    <div className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px] overflow-hidden`}>
      <div className='flex items-center justify-between py-6 border-b'>
        <div className='uppercase text-sm font-semibold'>
          Shopping Bag ({cart.length}) 
        </div>
        <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
          <IoMdArrowForward className='text-2xl' />
        </div>
      </div>
      <div className='overflow-y-auto max-h-[60vh]'> {/* Set max height and enable scrolling */}
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </div>
      
      <div className="flex justify-between items-center mt-4">
        <div> 
          <span>Total : </span>${calculateTotalPrice()}
        </div>
        <div onClick={clearCart} className='cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center item-center text-xl'><FiTrash2 /></div>
      </div>
      <div className="flex justify-center mt-4"> {/* Center align the button */}
        <button onClick={handleOrderNow} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
