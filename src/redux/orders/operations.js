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

export const fetchArchivedOrders = createAsyncThunk(
  'orders/fetchArchivedOrders',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/orders/archive');
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

export const changeOrdersFilter = createAsyncThunk(
  'orders/changeOrdersFilter',
  async (value, thunkAPI) => {
    try {
      return value;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changeArchiveFilter = createAsyncThunk(
  'orders/changeArchiveFilter',
  async (value, thunkAPI) => {
    try {
      return value;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changeArchiveSearch = createAsyncThunk(
  'orders/changeArchiveSearch',
  async (value, thunkAPI) => {
    try {
      return value;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);