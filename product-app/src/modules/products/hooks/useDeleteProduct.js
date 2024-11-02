import { useDispatch } from 'react-redux'
import { deleteProduct } from '../store/productSlice';

export const useDeleteProduct = () => {

    const dispatch = useDispatch();

    const deleteProductF = (data) => {
        dispatch(deleteProduct({deleteProductId : data}));
    }

  return deleteProductF;
}
