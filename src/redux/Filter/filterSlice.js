import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
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
