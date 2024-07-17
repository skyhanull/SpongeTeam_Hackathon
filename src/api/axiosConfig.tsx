// src/api/axiosConfig.js

import axios from 'axios';

// Axios 인스턴스 생성
const axiosInstance = axios.create({
  baseURL: 'http://localhost:5173/',
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' },
});

// 요청 인터셉터 설정
axiosInstance.interceptors.request.use(
  (config) => {
    console.log('Request was sent');
    config.headers.Authorization = 'Bearer YOUR_TOKEN';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터 설정
axiosInstance.interceptors.response.use(
  (response) => {
    console.log('Response received');
    response.data.transformedData = transformData(response.data);
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error('Unauthorized! Redirecting to login...');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

function transformData(data) {
  // 데이터 변환 로직
  return data;
}

export default axiosInstance;
