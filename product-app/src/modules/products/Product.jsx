import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { fetchProducts } from './store/productSlice';
import { Outlet } from 'react-router-dom';

const Product = () => {

  const dispatch = useDispatch();

  useEffect(()=>{
    ( async () => {
        await dispatch(fetchProducts());
    } )();

  },[dispatch])

  return (
    <Outlet />
  )
}

export default Product;