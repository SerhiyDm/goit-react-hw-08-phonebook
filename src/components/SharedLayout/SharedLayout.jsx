import { Header, AppWraperStyled, MainContainer } from './SharedLayout.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';
import { Loader } from '../Loader/Loader';
import { Toaster } from 'react-hot-toast';
import { useContacts, useAuth } from 'hooks';
export const SharedLayout = () => {
  const { isLoading, error } = useContacts();
  const { authLoading, authError } = useAuth();
  const contactsLoading = isLoading && !error;
  const authloading = authLoading && !authError;
  console.log(authLoading);

  return (
    <AppWraperStyled>
      <Header>
        <Navigation />
      </Header>
      <Toaster />
      <MainContainer>
        {(contactsLoading || authloading) && <Loader />}
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </MainContainer>
    </AppWraperStyled>
  );
};
