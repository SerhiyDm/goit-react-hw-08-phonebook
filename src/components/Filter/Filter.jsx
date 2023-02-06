import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { filtered } from 'redux/filterSlice';
import { useContacts } from 'hooks';
import { LabelStyled, InputStyled, FilterWraper } from './Filter.styled';
import { Button } from 'components/Button/Button';
import { FiX } from 'react-icons/fi';

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
    <FilterWraper>
      <Button>
        <FiX size="20" />
      </Button>
      <LabelStyled>
        <InputStyled
          onChange={handleChange}
          onBlur={filterOff}
          value={filterValue}
        />
      </LabelStyled>
    </FilterWraper>
  );
};

Filter.propTypes = {
  offSearch: PropTypes.func.isRequired,
};
