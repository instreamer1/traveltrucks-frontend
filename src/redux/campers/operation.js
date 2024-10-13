import { createAsyncThunk } from '@reduxjs/toolkit'; 
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const fetchCampers = createAsyncThunk(
  'campers/fetchCampers',
  async (filters, thunkAPI) => {
    try {
      const response = await axios.get(API_BASE_URL, { params: filters });
      console.log(response.data);
      return response.data;
    } catch (error) {
      const errorMessage = error.response ? error.response.data : error.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);
