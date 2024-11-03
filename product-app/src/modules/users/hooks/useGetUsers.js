import React from 'react'
import { useSelector } from 'react-redux'

export const useGetUsers = () => {

    const users = useSelector(state => state.users.users);

  return users;
}
