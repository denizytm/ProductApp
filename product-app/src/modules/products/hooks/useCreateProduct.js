import { useDispatch } from 'react-redux'
import { createProduct } from '../store/productSlice';

export const useCreateProduct = (data) => {

    const dispatch = useDispatch();

    const createNewProduct = () => {
        dispatch(createProduct({newProduct : data}))
    }

    return createNewProduct;
}
