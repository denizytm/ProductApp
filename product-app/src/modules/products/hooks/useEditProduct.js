import { useDispatch } from 'react-redux';
import { updateProduct } from '../store/productSlice';

export const useEditProduct = () => {

    const dispatch = useDispatch();

    const editProductF = (data) => {
        dispatch(updateProduct({updateProduct : data}))
    }

    return editProductF;
}
