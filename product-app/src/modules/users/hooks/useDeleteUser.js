import { useDispatch } from 'react-redux'
import { deleteUser } from '../store/userSlice';

export const useDeleteUser = () => {

    const dispatch = useDispatch();

    const deleteUserF = (data) => {
        dispatch(deleteUser({deleteUserId : data}));
    }

  return deleteUserF;
}
