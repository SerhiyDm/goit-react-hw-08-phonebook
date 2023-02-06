import { ButtonLink } from 'components/Button/Button.styled';
import { useLocation } from 'react-router-dom';
import { UserMenuStyled } from './Navigation.styled';

export const RegisterLoginMenu = () => {
  const { pathname } = useLocation();
  return (
    <UserMenuStyled>
      {pathname !== '/register' && (
        <ButtonLink to="/register">Sign up</ButtonLink>
      )}
      {pathname !== '/login' && <ButtonLink to="/login">Log In</ButtonLink>}
    </UserMenuStyled>
  );
};
