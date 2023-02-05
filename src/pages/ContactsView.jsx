import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addContact, fetchContacts } from 'redux/contacts';
import { Form } from 'components/Form/Form';
import { Contacts } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { NotifyError } from 'components/Notify';
import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import { ContactsPanel } from 'components/ContactsPanel';

import { filtered } from 'redux/filterSlice';
import { useContacts } from 'redux/hooks';

const params = {
  text1: 'Name',
  type1: 'text',
  name1: 'name',
  pattern1: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
  title1:
    "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
  text2: 'Number',
  type2: 'tel',
  name2: 'number',
  pattern2:
    '\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}',
  title2:
    'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
  buttonText: 'Add Contact',
};

const ContactsView = () => {
  const dispatch = useDispatch();
  const { contactsData, error } = useContacts();
  const [modalVisible, setModalVisible] = useState(false);
  const [filtervisible, setFilterVisible] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  useEffect(() => {
    if (error) NotifyError(error);
  }, [error]);
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value
      .split(' ')
      .map(element => element[0].toUpperCase() + element.slice(1).toLowerCase())
      .join(' ');
    const number = form.elements.number.value;
    if (contactsData.find(contact => contact.name === name)) {
      NotifyError(`${name} is already in contacts`);
      form.reset();
      return;
    }
    dispatch(addContact({ name, number }));
    form.reset();
    setModalVisible(false);
  };
  const handleClick = () => {
    setModalVisible(true);
  };
  const onSearch = () => setFilterVisible(true);
  const offSearch = () => setFilterVisible(false);
  const onModalClose = () => setModalVisible(false);
  const contactsOpen = () => setVisible(false);
  const contactsClose = () => {
    dispatch(filtered(''));
    setVisible(true);
  };
  const visibleOpenButton = contactsData.length !== 0 && visible;
  const visibleCloseSearchButton =
    contactsData.length !== 0 && !visible && !filtervisible;
  const visibleAddButton = !filtervisible;

  return (
    <>
      <ContactsPanel
        handleClick={handleClick}
        onSearch={onSearch}
        onContactsOpen={contactsOpen}
        onContactsClose={contactsClose}
        visibleOpenButton={visibleOpenButton}
        visibleCloseSearchButton={visibleCloseSearchButton}
        visibleAddButton={visibleAddButton}
      />
      {contactsData.length === 0 && <h3>Phonebook is empty</h3>}
      {contactsData.length !== 0 && (
        <>
          {filtervisible && <Filter offSearch={offSearch} />}
          {!visible && <Contacts />}
        </>
      )}
      {modalVisible && (
        <Modal onClose={onModalClose} buttonOnModal={modalVisible}>
          <Form params1={params} onSubmit={handleSubmit} autoComplete="off" />
        </Modal>
      )}
    </>
  );
};
export default ContactsView;
