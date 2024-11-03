import { useSelector } from 'react-redux'

export const useGetFavorites = () => {

    const favorites = useSelector(state => state.favorites.favorites);

    return [...favorites].sort((a,b) => b.id- a.id);
}
