// src/shared/services/axiosInstance.ts

import axios from 'axios';


const userInstance = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`,  // Kullanıcıları çekeceğimiz API
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' },
});

// Request interceptor
userInstance.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => Promise.reject(error)
);

userInstance.interceptors.response.use(
    (response) => response,
    (error) => {

        if (error.response && error.response.status === 401) {
            console.error("Unexpected Error");
        }
        return Promise.reject(error);
    }
);

export const fetchUsersFromAPI = async () => {
    const response = await userInstance.get('/users');  // istek yollayacağımız end point
    return response.data;
};

export default userInstance;