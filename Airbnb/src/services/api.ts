import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const auth = {
  register: (data: any) => api.post('/auth/register', data),
  login: (data: any) => api.post('/auth/login', data),
};

export const listings = {
  getAll: () => api.get('/listings'),
  getOne: (id: string) => api.get(`/listings/${id}`),
  create: (data: any) => api.post('/listings', data),
};

export const bookings = {
  create: (data: any) => api.post('/bookings', data),
  getUserBookings: () => api.get('/bookings/user'),
};