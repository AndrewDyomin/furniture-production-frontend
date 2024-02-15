import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllComponents = createAsyncThunk(
  'components/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/components/all');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addComponent = createAsyncThunk(
  'components/addComponent',
  async (data, thunkAPI) => {
    try {
      await axios.post('/components/add', data);
      const response = thunkAPI.dispatch(fetchAllComponents());
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateComponent = createAsyncThunk(
  'components/update',
  async (data, thunkAPI) => {
    try {
      await axios.post('/components/update', data);
      const response = thunkAPI.dispatch(fetchAllComponents());
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteComponent = createAsyncThunk(
  'components/delete',
  async (id, thunkAPI) => {
    try {
      console.log({id})
      await axios.delete('/components/remove', {
        data: {id},
        headers: {
          'Content-Type': 'application/json'
        }});
      const response = thunkAPI.dispatch(fetchAllComponents());
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
