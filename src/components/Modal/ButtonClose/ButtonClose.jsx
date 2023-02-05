import PropTypes from 'prop-types';
import { FiX } from 'react-icons/fi';
import { ButtonCloseStyled } from './ButtonClose.styled';

export const ButtonClose = ({ onClose }) => {
  return (
    <ButtonCloseStyled onClick={onClose}>
      <FiX size="30" />
    </ButtonCloseStyled>
  );
};

ButtonClose.propTypes = {
  onClose: PropTypes.func.isRequired,
};
