import { GlobalStyles } from '../GlobalStyles';
import { Contacts } from '../ContactsList/ContactsList';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { AppWraperStyled } from './App.styled';
import { useSelector } from 'react-redux';
import { getContactsData } from 'redux/Contacts';
export const App = () => {
  const contactsData = useSelector(getContactsData);
  return (
    <AppWraperStyled>
      <h1>Phonebook</h1>
      <ContactForm />
      {contactsData.length === 0 && <h3>Phonebook is empty</h3>}
      {contactsData.length !== 0 && (
        <>
          <h2>Contacts</h2>
          <Filter />
          <Contacts />
        </>
      )}
      <GlobalStyles />
    </AppWraperStyled>
  );
};
