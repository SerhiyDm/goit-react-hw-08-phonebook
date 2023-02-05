import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { filtered } from 'redux/filterSlice';
import { useContacts } from 'redux/hooks';
import { LabelStyled, InputStyled } from './Filter.styled';

export const Filter = ({ offSearch }) => {
  const dispatch = useDispatch();
  const { filterValue } = useContacts();

  const filterOff = () => {
    offSearch();
  };
  const handleChange = e => {
    dispatch(filtered(e.target.value));
  };
  return (
    <>
      <LabelStyled>
        <InputStyled
          onChange={handleChange}
          onBlur={filterOff}
          value={filterValue}
        />
      </LabelStyled>
    </>
  );
};

Filter.propTypes = {
  offSearch: PropTypes.func.isRequired,
};
