import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:9090/api', // Backend URL (gerekiyorsa portu güncelle)
});

// Eğer kullanıcı giriş yaptıysa, token'ı her isteğe otomatik ekle
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');

  // login ve register için token gönderme!
  const isAuthEndpoint = config.url.includes('/login') || config.url.includes('/register');

  if (token && !isAuthEndpoint) {
    config.headers.Authorization = token;
  }

  return config;
});


export default API;
