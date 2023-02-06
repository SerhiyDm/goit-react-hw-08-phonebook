import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUserName,
  selectAuthError,
  selectAuthLoading,
} from 'redux/auth/selectors';

export const useAuth = () => {
  return {
    isLoggedIn: useSelector(selectIsLoggedIn),
    isRefreshing: useSelector(selectIsRefreshing),
    userName: useSelector(selectUserName),
    authError: useSelector(selectAuthError),
    authLoading: useSelector(selectAuthLoading),
  };
};
