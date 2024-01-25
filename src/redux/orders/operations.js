import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllOrders = createAsyncThunk(
  'orders/fetchAllOrders',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/orders/all');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const setActiveOrder = createAsyncThunk(
  'orders/setActiveOrder',
  async (order, thunkAPI) => {
    try {
      return order;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

