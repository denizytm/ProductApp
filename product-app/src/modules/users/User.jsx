import React from 'react'
import { Outlet } from 'react-router-dom';
import useFetchUsers from './hooks/useFetchUsers';

const User = () => {

  const fetchUsers = useFetchUsers();

  fetchUsers();

  return (
    <Outlet />
  )
}

export default User;