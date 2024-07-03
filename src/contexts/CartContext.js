import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [itemAmount,setItemAmount] = useState(0)

  const addToCart = (product, id) => {
    const cartItem = cart.find(item => item.id === id);

    if (cartItem) {
      const newCart = cart.map(item =>
        item.id === id ? { ...item, amount: item.amount + 1 } : item
      );
      setCart(newCart);
    } else {
      const newCartItem = { ...product, amount: 1 };
      setCart([...cart, newCartItem]);
    }
  };

  useEffect(()=>{
    if(cart){
      const amount =  cart.reduce((accumulator,currentItem) =>{
        return accumulator + currentItem.amount
      },0)
      setItemAmount(amount)
    }
  },[cart])
  const clearCart = () => {
    setCart([]);
  };

  const increaseAmount = (id) => {
    const newCart = cart.map(item =>
      item.id === id ? { ...item, amount: item.amount + 1 } : item
    );
    setCart(newCart);
  };

  const decreaseAmount = (id) => {
    const newCart = cart.map(item =>
      item.id === id ? { ...item, amount: item.amount - 1 } : item
    );
    setCart(newCart.filter(item => item.amount > 0)); // Ensure amount doesn't go below 0
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter(item => item.id !== id);
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ itemAmount,cart, clearCart, increaseAmount, decreaseAmount, removeFromCart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
