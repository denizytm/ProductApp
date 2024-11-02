import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, Route, Routes } from 'react-router-dom';
import { UserList } from './components/UserList';
import { fetchUsers } from './store/userSlice';

const User = () => {

  const dispatch = useDispatch();

  useEffect(()=>{
    ( async () => {
        await dispatch(fetchUsers()); // Bu alanda sadece kullanıcılarla uğraşacağımız için diğer componentleri çağırmadan önce API üzerinden users verilerini çekiyoruz
    } )();

  },[dispatch])

  return (
    <Outlet />
  )
}

export default User;