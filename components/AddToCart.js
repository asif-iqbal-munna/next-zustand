'use client'
import { useBoundStore } from '@/store/store';
import React from 'react';

const AddToCart = ({ product }) => {
  const { price, } = product
  const { addToCart } = useBoundStore()
  return (
    <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
        <button onClick={() => addToCart(product)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</button>
    </div>
  );
};

export default AddToCart;