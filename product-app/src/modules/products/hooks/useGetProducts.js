import { useSelector } from 'react-redux'

export const useGetProducts = () => {

    const products = useSelector(state => state.products.products);

    return products;
}
