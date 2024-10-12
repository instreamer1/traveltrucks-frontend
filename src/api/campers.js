import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const fetchCampers = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data; // Возвращаем только первые 4 элемента
  } catch (error) {
    throw error.response;
  }
};