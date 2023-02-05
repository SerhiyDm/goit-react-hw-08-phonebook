import { ButtonLink2 } from 'components/Button/Button.styled';
import { FiHome } from 'react-icons/fi';

export const HomeLink = () => {
  return (
    <>
      <ButtonLink2 to="/">
        <FiHome size="25" color="#e0cccc" />
      </ButtonLink2>
    </>
  );
};
