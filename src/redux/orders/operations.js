import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

export const fetchAllOrders = createAsyncThunk(
  'orders/fetchAllOrders',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/orders/all');
      if (res.data.message) {
        toast.error(`${res.data.message}`)
        return {allOrdersArray: []};
      }
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

export const archiveOrder = createAsyncThunk(
  'orders/archiveOrder',
  async (_id, thunkAPI) => {
    try {
      const response = await axios.post('/orders/archive', {_id});

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);