import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// GET @ /tasks
export const fetchMebtownOrders = createAsyncThunk(
  'orders/fetchMebtownOrders',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/orders/mebtown');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);



