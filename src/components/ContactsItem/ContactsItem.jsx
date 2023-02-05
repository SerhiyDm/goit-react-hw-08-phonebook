import PropTypes from 'prop-types';
import { useState } from 'react';
import { deleteContact } from 'redux/contacts';
import { useDispatch } from 'react-redux';
import { Contact } from './ContactsItem.styled';
import { Modal } from 'components/Modal/Modal';
import { ButtonCall, ButtonDelete } from './ContactsButtons/ContactsButtons';
export const ContactsItem = ({ name, number, id }) => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  const openModal = () => setVisible(true);
  const onDelete = () => {
    dispatch(deleteContact(id));
    setVisible(false);
  };
  const onClose = () => setVisible(false);

  return (
    <>
      <Contact cursor="pointer" onClick={openModal}>
        {name}: {number} <ButtonCall number={number} />
      </Contact>
      {visible && (
        <Modal onClose={onClose}>
          <ButtonDelete bgcl="rgba(0, 0, 0, 0.1)" onDelete={onDelete} />
          <Contact>
            {name}: {number}{' '}
          </Contact>
          <ButtonCall number={number} />
        </Modal>
      )}
    </>
  );
};

ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
