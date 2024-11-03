import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../store/userSlice';

const useCreateUser = () => {
    const dispatch = useDispatch();

    const createUserF = () => {
        dispatch(createUser());
    }

    return createUserF;
};

export default useCreateUser;