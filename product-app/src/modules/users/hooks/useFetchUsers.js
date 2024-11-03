import { useDispatch } from 'react-redux';
import { fetchUsers } from '../store/userSlice';

const useFetchUsers = () => {
    const dispatch = useDispatch();

    const fetchUsersF = async () => {
        try {
            ( async () => {
                await dispatch(fetchUsers());
                return true;
            } )();
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    return fetchUsersF;
};

export default useFetchUsers;