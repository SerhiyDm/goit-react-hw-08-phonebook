import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { ButtonStyled } from './ContactsItem.styled';
import { remove } from 'redux/contactsSlice';
export const ContactsItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const onDelete = itemId => {
    dispatch(remove(itemId));
  };

  return (
    <li style={{ lineHeight: '45px' }}>
      {name}: {number}{' '}
      <ButtonStyled onClick={() => onDelete(id)}>Delete</ButtonStyled>
    </li>
  );
};

ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
