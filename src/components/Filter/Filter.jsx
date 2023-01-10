import { useDispatch, useSelector } from 'react-redux';
import { filtered } from 'redux/filterSlice';
import { LabelStyled, InputStyled } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const text = 'Find contacts by name';
  return (
    <LabelStyled>
      {text}
      <InputStyled
        onChange={e => dispatch(filtered(e.target.value))}
        value={useSelector(state => state.filter.value)}
      />
    </LabelStyled>
  );
};
