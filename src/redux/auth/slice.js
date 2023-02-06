import { createSlice } from '@reduxjs/toolkit';
import { refresh, login, logout, register } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending](state) {
      state.isLoading = true;
    },
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    },
    [register.rejected](state, action) {
      state.isLoading = false;
      state.error = '🚫❗❗ The data is entered incorrectly';
    },
    [login.pending](state) {
      state.isLoading = true;
    },
    [login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
      state.isLoading = false;
    },
    [login.rejected](state, action) {
      state.error = '🚫❗❗ Data entry error!';
      state.isLoading = false;
    },
    [logout.pending](state) {
      state.isLoading = true;
    },
    [logout.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.error = null;
      state.isLoading = false;
    },
    [logout.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
    [refresh.pending](state) {
      state.isLoading = true;
      state.isRefreshing = true;
    },
    [refresh.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.isLoading = false;
    },
    [refresh.rejected](state) {
      state.isRefreshing = false;
      state.isLoading = false;
    },
  },
});
export const authReducer = authSlice.reducer;
