import PropTypes from 'prop-types';
import { ButtonStyled } from './Button.styled';

export const Button = ({ children, onClick }) =>
  onClick ? (
    <ButtonStyled onClick={onClick}>{children}</ButtonStyled>
  ) : (
    <ButtonStyled>{children}</ButtonStyled>
  );
Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};
