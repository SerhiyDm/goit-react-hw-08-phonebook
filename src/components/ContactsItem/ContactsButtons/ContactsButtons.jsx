import PropTypes from 'prop-types';
import { MdDeleteForever } from 'react-icons/md';
import { FiPhoneCall } from 'react-icons/fi';

import { ButtonStyled, ContactPhoneLink } from './ContactsButtons.styled';

export const ButtonDelete = ({ bgcl, onDelete }) => (
  <ButtonStyled bgcl={bgcl} onClick={onDelete}>
    <MdDeleteForever size="25" color="#757575" />
  </ButtonStyled>
);

export const ButtonCall = ({ number }) => (
  <ContactPhoneLink tel={number}>
    <FiPhoneCall size="20" color="#757575" />
  </ContactPhoneLink>
);

ButtonDelete.propTypes = {
  bgcl: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
};

ButtonCall.propTypes = {
  number: PropTypes.string.isRequired,
};
