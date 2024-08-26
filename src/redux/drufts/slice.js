import { createSlice } from '@reduxjs/toolkit';
import { logOut } from '../auth/operations';
import { fetchAllDrufts } from './operations';
import { setActiveDruft } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const druftsSlice = createSlice({
  name: 'drufts',
  initialState: {
    items: [],
    activeItem: {},
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAllDrufts.pending, handlePending)
      .addCase(fetchAllDrufts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchAllDrufts.rejected, handleRejected)
      .addCase(setActiveDruft.fulfilled, (state, action) => {
        state.activeItem = action.payload;
      })
      .addCase(logOut.fulfilled, state => {
        state.items = [];
        state.activeItem = {};
        state.error = null;
        state.isLoading = false;
      });
  },
});

export const druftsReducer = druftsSlice.reducer;