// src/shared/services/axiosInstance.ts

import axios from 'axios';


const productInstance = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`,  // Ürünleri çekeceğimiz API
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' },
});

// Request interceptor
productInstance.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => Promise.reject(error)
);

// Response interceptor
productInstance.interceptors.response.use(
    (response) => response,
    (error) => {

        if (error.response && error.response.status === 401) {
            console.error("Unexpected Error");
        }
        return Promise.reject(error);
    }
);

export const fetchProductsAPI = async () => {
    const response = await productInstance.get('/products');  // Burada endpoint'i özelleştirin
    return response.data;
};

export default productInstance;