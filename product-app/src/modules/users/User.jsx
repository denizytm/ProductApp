// Packages
import React from 'react'
import { Outlet } from 'react-router-dom';
// Hooks
import useFetchUsers from './hooks/useFetchUsers';

const User = () => {

  const fetchUsers = useFetchUsers();

  fetchUsers();

  return (
    <Outlet />
  )
}

export default User;