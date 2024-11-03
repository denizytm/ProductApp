import { useDispatch } from 'react-redux';
import { fetchUsers } from '../store/userSlice';

const useFetchUsers = () => {
    const dispatch = useDispatch();

    const fetchUsersF = () => {
        dispatch(fetchUsers());
    }

    return fetchUsersF;
};

export default useFetchUsers;