// src/shared/services/axiosInstance.ts

import axios from 'axios';

const userInstance = axios.create({
    baseURL: 'https://api.example.com',  // Kullanıcıları çekeceğimiz API
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' },
});

// Request interceptor
userInstance.interceptors.request.use(
    (config) => {
        // Örneğin, token ekleyebiliriz
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response interceptor
userInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        // Hata durumlarını merkezi olarak işleyebiliriz
        if (error.response && error.response.status === 401) {
            // Örneğin, kullanıcıyı çıkış yapabiliriz
            console.error("Unauthorized! Logging out...");
        }
        return Promise.reject(error);
    }
);

export const fetchUsersFromAPI = async () => {
    const response = await userInstance.get('/users');  // Burada endpoint'i özelleştirin
    return response.data;
};

export default userInstance;