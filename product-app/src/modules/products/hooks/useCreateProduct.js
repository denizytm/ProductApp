import { useDispatch } from 'react-redux'
import { createProduct } from '../store/productSlice';

export const useCreateProduct = () => {

    const dispatch = useDispatch();

    const createNewProduct = (data) => {
        dispatch(createProduct({newProduct : data}))
    }

    return createNewProduct;
}
