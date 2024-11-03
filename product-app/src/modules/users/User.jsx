import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, Route, Routes } from 'react-router-dom';
import { UserList } from './components/UserList';
import { fetchUsers } from './store/userSlice';
import useFetchUsers from './hooks/useFetchUsers';

const User = () => {

  const fetchUsers = useFetchUsers();

  fetchUsers();

  return (
    <Outlet />
  )
}

export default User;