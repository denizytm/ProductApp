import React from 'react'
import { useDispatch } from 'react-redux'
import { updateUser } from '../store/userSlice';

export const useEditUser = () => {

    const dispatch = useDispatch();

    const editUserF = (data) => {
        dispatch(updateUser({updateUser : data}));
    }

  return editUserF;
}
