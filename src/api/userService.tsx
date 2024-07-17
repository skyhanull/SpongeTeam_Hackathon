// src/api/userService.js

import axiosInstance from './axiosConfig';

export const getUserData = async () => {
  try {
    const response = await axiosInstance.get('/api/review');
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};
