import { FiLogOut, FiList, FiArrowRight } from 'react-icons/fi';
import { HiUserCircle } from 'react-icons/hi2';
import { UserMenuStyled, UserNameBox } from './Navigation.styled';
import { useDispatch } from 'react-redux';
import { Button } from 'components/Button/Button';
import { useLocation } from 'react-router-dom';
import { ButtonLink2 } from 'components/Button/Button.styled';
import { useAuth } from 'redux/hooks';
import { logout } from 'redux/auth';
import { NotifyOk } from 'components/Notify';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { userName } = useAuth();

  const out = () => {
    dispatch(logout())
      .unwrap()
      .then(() => {
        NotifyOk('✔');
      });
  };
  return (
    <UserMenuStyled>
      {pathname === '/' && (
        <ButtonLink2 to="/contacts">
          <FiArrowRight color="#b1ddf4d0" />
          <FiList color="#b1ddf4d0" />
        </ButtonLink2>
      )}
      <UserNameBox>
        <HiUserCircle size="30" />
        <span>{userName}</span>
      </UserNameBox>
      <Button onClick={out}>
        <FiLogOut size="18" color="#37546d" />
      </Button>
    </UserMenuStyled>
  );
};
