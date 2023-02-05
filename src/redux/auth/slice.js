import { createSlice } from '@reduxjs/toolkit';
import { refresh, login, logout, register } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
    },
    [register.rejected](state, action) {
      state.error = '🚫❗❗ The data is entered incorrectly';
    },
    [login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
    },
    [login.rejected](state, action) {
      state.error = '🚫❗❗ Data entry error!';
    },
    [logout.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.error = null;
    },
    [logout.rejected](state, action) {
      state.error = action.payload;
    },
    [refresh.pending](state) {
      state.isRefreshing = true;
    },
    [refresh.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refresh.rejected](state) {
      state.isRefreshing = false;
    },
  },
});
export const authReducer = authSlice.reducer;
// ---------------------так ⬇ не працють з pending та rejected------------------//
//    import { createSlice, isAnyOf } from '@reduxjs/toolkit';
// const logoutFulfilledReducer = state => {
//   state.user = { name: null, email: null };
//   state.token = null;
//   state.isLoggedIn = false;
//   state.error = null;
// };
// const refreshReducer = state => {
//   state.isRefreshing = false;
// };
// const refreshPendingReducer = state => (state.isRefreshing = true);

// const regLoginFulfilledReducer = (state, action) => {
//   state.token = action.payload.token;
//   state.error = null;
// };
// const fulfilledReducer = (state, action) => {
//   state.user = action.payload;
//   state.isLoggedIn = true;
// };
// const rejectedReducer = (state, action) => {
//   console.log(action.payload);
//   state.error = action.payload;
// };

//builder =>
//   builder
//     .addCase(register.fulfilled, regLoginFulfilledReducer)
//     .addCase(login.fulfilled, regLoginFulfilledReducer)
//     .addCase(logout.fulfilled, logoutFulfilledReducer)
//     .addCase(refresh.fulfilled, refreshReducer)
//     .addCase(refresh.pending, refreshPendingReducer)
//     .addCase(refresh.rejected, refreshReducer)
//     .addMatcher(
//       isAnyOf(register.fulfilled, login.fulfilled, refresh.fulfilled),
//       fulfilledReducer
//     )
//     .addMatcher(
//       isAnyOf(
//         refresh.rejected,
//         login.rejected,
//         logout.rejected,
//         register.rejected
//       ),
//       rejectedReducer
//     ),
