import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    value: '',
  },
  reducers: {
    filtered(state, action) {
      state.value = action.payload;
    },
  },
});

export const { filtered } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
