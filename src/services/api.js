import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    }
});

// Request interceptor for auth token
axiosInstance.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => Promise.reject(error)
);

// Response interceptor for error handling
axiosInstance.interceptors.response.use(
    response => response,
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    localStorage.removeItem('token');
                    window.location.href = '/login';
                    break;
                case 404:
                    console.error('Resource not found:', error.config.url);
                    break;
                case 500:
                    console.error('Server error:', error.response.data);
                    break;
                default:
                    console.error('API Error:', error.response.data);
            }
        } else if (error.request) {
            console.error('Network Error:', error.request);
        }
        return Promise.reject(error);
    }
);

export const api = {
    // Products
    getAllProducts: (params = {}) => axiosInstance.get('/products', { params }),
    getProduct: (id) => axiosInstance.get(`/products/${id}`),
    getCategories: () => axiosInstance.get('/products/categories'),
    getProductsByCategory: (category) => axiosInstance.get(`/products/category/${category}`),

    // Cart
    getUserCart: (userId) => axiosInstance.get(`/carts/user/${userId}`),
    addToCart: (cartData) => axiosInstance.post('/carts', cartData),

    // Auth
    login: (credentials) => axiosInstance.post('/auth/login', credentials),
    getUserDetails: (userId) => axiosInstance.get(`/users/${userId}`)
};