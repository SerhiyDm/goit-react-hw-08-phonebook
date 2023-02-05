import PropTypes from 'prop-types';
import { Button } from './Button/Button';
import { ButtonsWraper } from './Button/Button.styled';
import { FiPlus, FiSearch, FiX, FiList } from 'react-icons/fi';

export const ContactsPanel = ({
  handleClick,
  onSearch,
  onContactsOpen,
  onContactsClose,
  visibleOpenButton,
  visibleCloseSearchButton,
  visibleAddButton,
}) => {
  return (
    <ButtonsWraper>
      {' '}
      {visibleAddButton && (
        <Button onClick={handleClick}>
          <FiPlus size="20" />
        </Button>
      )}
      {visibleOpenButton && (
        <Button onClick={onContactsOpen}>
          <FiList size="20" />
        </Button>
      )}
      {visibleCloseSearchButton && (
        <Button onClick={onSearch}>
          <FiSearch size="20" />
        </Button>
      )}
      {visibleCloseSearchButton && (
        <Button onClick={onContactsClose}>
          <FiX size="20" />
        </Button>
      )}
    </ButtonsWraper>
  );
};

ContactsPanel.propTypes = {
  handleClick: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  onContactsOpen: PropTypes.func.isRequired,
  onContactsClose: PropTypes.func.isRequired,
  visibleOpenButton: PropTypes.bool.isRequired,
  visibleCloseSearchButton: PropTypes.bool.isRequired,
  visibleAddButton: PropTypes.bool.isRequired,
};
