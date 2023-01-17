import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filtered } from 'redux/filterSlice';
import { selectFilterValue } from 'redux/selectors';
import { LabelStyled, InputStyled, FilterContainer } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const text = 'Find contacts by name';
  const [isOnFocus, setIsOnFocus] = useState(false);
  const filterOn = () => {
    window.scrollBy({
      top: 350,
      behavior: 'smooth',
    });
    setIsOnFocus(true);
  };
  const filterOff = () => {
    setIsOnFocus(false);
  };
  return (
    <FilterContainer isOnFocus={isOnFocus}>
      <LabelStyled>
        {text}
        <InputStyled
          onChange={e => dispatch(filtered(e.target.value))}
          onFocus={filterOn}
          onBlur={filterOff}
          value={useSelector(selectFilterValue)}
        />
      </LabelStyled>
    </FilterContainer>
  );
};
