import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = process.env.SERVER_URL;

export const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/auth/register', credentials);
      setAuthHeader(res.data.user.token);
      return res.data.user;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        status: error.response ? error.response.status : null,
        message: error.message,
      });
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/auth/login', credentials);
      setAuthHeader(res.data.user.token);
      return res.data.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async (email, thunkAPI) => {
    try {
      const res = await axios.post('/api/auth/forgot-password', email);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const logOut = createAsyncThunk('/auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/api/auth/signout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get('/user/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);