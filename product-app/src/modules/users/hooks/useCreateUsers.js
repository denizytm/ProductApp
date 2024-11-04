import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../store/userSlice';

const useCreateUser = () => {
    const dispatch = useDispatch();

    const createUserF = (data) => {
        dispatch(createUser({newUser : data}));
    }

    return createUserF;
};

export default useCreateUser;