import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
console.log(API_BASE_URL);
export const fetchCampers = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data; 
  } catch (error) {
    throw error.response;
  }
};