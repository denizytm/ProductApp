import { useDispatch } from 'react-redux'
import { deleteFavorite } from '../store/favoriteSlice';

export const useDeleteFavorite = () => {

    const dispatch = useDispatch();

    const deleteFavoriteF = (data) => {
        dispatch(deleteFavorite({deleteFavoriteId : data}));
    }

  return deleteFavoriteF;
}
