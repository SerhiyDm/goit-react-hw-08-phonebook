import { GlobalStyles } from '../GlobalStyles';
import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { SharedLayout } from '../SharedLayout/SharedLayout';
import { useDispatch } from 'react-redux';
import { refresh } from 'redux/auth';
import { useAuth } from 'redux/hooks/useAuth';
import { RefreshingPage } from './refreshingPage/refreshingPage';
import { RestrictedRoute } from 'components/RestrictrdRoute';
import { PrivateRoute } from 'components/PrivateRoute';
import { NotifyError } from 'components/Notify';
const RegisterView = lazy(() => import('pages/RegisterView'));
const LoginView = lazy(() => import('pages/LoginView'));
const ContactsView = lazy(() => import('pages/ContactsView'));
const Home = lazy(() => import('pages/Home'));
export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing, authError } = useAuth();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  useEffect(() => {
    if (authError) NotifyError(authError);
  }, [authError]);

  return isRefreshing ? (
    <RefreshingPage />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route
            path="register"
            element={
              <RestrictedRoute
                component={RegisterView}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute component={LoginView} redirectTo="/contacts" />
            }
          />
          <Route
            path="contacts"
            element={<PrivateRoute component={ContactsView} redirectTo="/" />}
          />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      <GlobalStyles />
    </>
  );
};
