import React from 'react'
import { Outlet } from 'react-router-dom';
import { useFetchProducts } from './hooks/useFetchProducts';

const Product = () => {

  const fetchProducts = useFetchProducts();
  
  fetchProducts();

  return (
    <Outlet />
  )
}

export default Product;