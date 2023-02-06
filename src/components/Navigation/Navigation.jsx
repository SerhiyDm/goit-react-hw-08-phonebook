import { useAuth } from 'hooks';
import { HomeLink } from './LogoHomeLink';
import { Nav } from './Navigation.styled';
import { RegisterLoginMenu } from './RegisterLoginMenu';
import { UserMenu } from './UserMenu';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Nav>
      <HomeLink />
      {!isLoggedIn && <RegisterLoginMenu />}
      {isLoggedIn && <UserMenu />}
    </Nav>
  );
};
