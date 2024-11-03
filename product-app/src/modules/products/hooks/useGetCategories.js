import { useSelector } from 'react-redux'

export const useGetCategories = () => {

    const categories = useSelector(state => state.products.categories);

    return categories;
}
