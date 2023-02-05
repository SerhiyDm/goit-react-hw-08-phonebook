import { Header, AppWraperStyled, MainContainer } from './SharedLayout.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';
import { Loader } from '../Loader/Loader';
import { Toaster } from 'react-hot-toast';
import { useContacts } from 'redux/hooks';
export const SharedLayout = () => {
  const { isLoading, error } = useContacts();
  return (
    <AppWraperStyled>
      <Header>
        <Navigation />
      </Header>
      <Toaster />
      <MainContainer>
        {isLoading && !error && <Loader />}
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </MainContainer>
    </AppWraperStyled>
  );
};
