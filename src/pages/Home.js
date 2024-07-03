import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product';
import Hero from '../components/Hero';

const Home = () => {
  // Fetch products from the ProductContext
  const { products } = useContext(ProductContext);

  // Filter products for display (example: only clothing items)
  const filteredProducts = products ? products.filter(item => (
    item.category === "men's clothing" || item.category === "women's clothing"
  )) : [];

  return (
    <div>
      {/* Hero section */}
      <Hero />

      {/* Main content section */}
      <section className='container mx-auto py-8'>
        <h1 className='text-3xl font-semibold mb-4 items-center'>Welcome to the Homepage</h1>

        {/* Display filtered products */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
          {filteredProducts.map(product => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
