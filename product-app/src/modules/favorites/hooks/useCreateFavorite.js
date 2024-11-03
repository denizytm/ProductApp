import { useDispatch } from 'react-redux'
import { createFavorite } from '../store/favoriteSlice';

export const useCreateFavorite = () => {

    const dispatch = useDispatch();

    const createNewFavoriteF = (data) => {
        dispatch(createFavorite({newProduct : data}))
    }

    return createNewFavoriteF;
}
