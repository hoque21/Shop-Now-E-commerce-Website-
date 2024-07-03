import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../contexts/ProductContext';
import { CartContext } from '../contexts/CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find(item => item.id === parseInt(id));

  if (!product) {
    return (
      <section className='h-screen flex justify-center items-center'>
        Loading...
      </section>
    );
  }

  const { title, price, description, image } = product; 
  return (
    <section className='pt-32 p-9 pb-12 lg-py-32 h-screen'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row items-center justify-center'>
          <div className="max-w-[100px] lg:max-w-sm mb-4 lg:mb-0">
            <img className='w-full h-auto' src={image} alt={title} />
          </div>
          <div className="ml-4">
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="text-gray-700">{description}</p>
            <p className="text-gray-900 font-bold mt-2">${price}</p>
            <button 
              className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
