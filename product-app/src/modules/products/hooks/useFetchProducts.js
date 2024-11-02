import { useEffect } from 'react';
import { fetchProducts } from '../store/productSlice';
import { useDispatch } from 'react-redux';

export const useFetchProducts = () => {

    const dispatch = useDispatch();

    const fetchProductsF = async () => {
        try {
            ( async () => {
                await dispatch(fetchProducts());
                return true;
            } )();
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    return fetchProductsF;
}
