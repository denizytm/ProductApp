import { useDispatch } from 'react-redux'
import { createUser } from '../store/userSlice';

export const useUpdateUser = () => {

    const dispatch = useDispatch();

    const updateUser = () => {
        dispatch(createUser());
    }

  return updateUser;
}
