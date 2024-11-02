// src/shared/services/axiosInstance.ts

import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://api.example.com',  // Product'ları çekeceğimiz API
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' },
});

// Request interceptor
axiosInstance.interceptors.request.use(
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
axiosInstance.interceptors.response.use(
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

export default axiosInstance;