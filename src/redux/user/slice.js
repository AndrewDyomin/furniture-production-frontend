import { createSlice } from '@reduxjs/toolkit';
import { updateUser } from './operations';


const handleRejected = (state, action) => {
  state.error = action.payload;
};

const userSlice = createSlice({
  name: 'user',
  initialState:{},
  extraReducers: (builder) =>
    builder
      .addCase(updateUser.rejected, handleRejected)
});

export const userReducer = userSlice.reducer;