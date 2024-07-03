import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsEyeFill, BsPlus } from 'react-icons/bs';
import { CartContext } from '../contexts/CartContext';

const Product = ({ product }) => {
  const { id, image, title, price } = product;
const {addToCart} = useContext(CartContext)

  return (
    <div>
      <div className='border h-[300px] mb-4 relative overflow-hidden group transition'>
        <div className='w-full h-full flex flex-col p-2 justify-center items-center'>
          <div className='w-[200px] mx-auto flex justify-center items-center'>
            <img className='max-h-[160px] transition duration-300 group-hover:scale-110' src={image} alt='' />
          </div>

          <div className='duration-300 transition-all border absolute top-6 -right-11 group-hover:right-5 gap-1 p-1 rounded flex flex-col items-center opacity-0 group-hover:opacity-100 justify-center items-center'>
            {/* Plus Button */}
            <button onClick={()=>addToCart(product,id)}>
              <div className='flex justify-center bg-red-800 items-center text-white w-8 h-8'>
                <BsPlus className='text-3xl' />
              </div>
            </button>
            <hr />

            {/* Link */}
            <Link to={`/product/${id}`} className='w-12 rounded-full h-12 flex justify-center items-center text-primary drop-shadow-xl'>
  <BsEyeFill />
</Link>
          </div>
        </div>
      </div>

      {/* Title */}
      <Link className="block text-center" to={`/product/${id}`}>
        {title}
      </Link>
      
      {/* Price */}
      <div className="text-center">{price}</div>
    </div>
  );
};

export default Product;
