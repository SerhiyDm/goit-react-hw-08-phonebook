import PropTypes from 'prop-types';
import { LabelStyled, InputStyled } from './Input.styled';

export const Input = ({ text = '', type, name, pattern, title }) => (
  <LabelStyled>
    {text}
    <InputStyled type={type} name={name} pattern={pattern} title={title} />
  </LabelStyled>
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  pattern: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
