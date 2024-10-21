import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchCampers = createAsyncThunk(
  'campers/fetchCampers',
  async (filters, thunkApi) => {
    const {
      location,
      vehicleType,
      vehicleEquipment,
      page = 1,
      limit = 4,
    } = filters;
    try {
      const params = new URLSearchParams();

      if (location) params.append('location', location);
      if (vehicleType) params.append('form', vehicleType);
      Object.keys(vehicleEquipment).forEach(key => {
        if (vehicleEquipment[key]) {
          params.append(key, 'true');
        }
      });
      // Pagination
      params.append('page', page); 
      params.append('limit', limit);

      // Forming URLs with query parameters
      const query = params.toString() ? `?${params.toString()}` : '';
      console.log(query);
    
      const response = await axios.get(`${API_BASE_URL}${query}`);
      console.log(response.data);
   
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);