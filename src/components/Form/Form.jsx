import PropTypes from 'prop-types';
import { Button } from '../Button/Button';
import { FormStyled } from './Form.styled';
import { Input } from '../Input/Input';

export const Form = ({ params1, params2, onSubmit, autoComplete }) => {
  const {
    text1,
    type1,
    name1,
    pattern1,
    title1,
    text2,
    type2,
    name2,
    pattern2,
    title2,
    buttonText,
  } = params1;
  return (
    <FormStyled onSubmit={onSubmit} autoComplete={autoComplete}>
      <Input
        text={text1}
        type={type1}
        name={name1}
        pattern={pattern1}
        title={title1}
        autoFocus={true}
      />
      <Input
        text={text2}
        type={type2}
        name={name2}
        pattern={pattern2}
        title={title2}
      />
      {params2 && (
        <Input
          text={params2.text}
          type={params2.type}
          name={params2.name}
          pattern={params2.pattern}
          title={params2.title}
        />
      )}
      <Button>{buttonText}</Button>
    </FormStyled>
  );
};
Form.propTypes = {
  params1: PropTypes.shape({
    text1: PropTypes.string.isRequired,
    type1: PropTypes.string.isRequired,
    name1: PropTypes.string.isRequired,
    pattern1: PropTypes.string.isRequired,
    title1: PropTypes.string.isRequired,
    text2: PropTypes.string.isRequired,
    type2: PropTypes.string.isRequired,
    name2: PropTypes.string.isRequired,
    pattern2: PropTypes.string.isRequired,
    title2: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
  autoComplete: PropTypes.string,
  params2: PropTypes.shape({
    text: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    pattern: PropTypes.string,
    title: PropTypes.string,
  }),
};
