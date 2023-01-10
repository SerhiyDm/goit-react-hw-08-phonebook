import { GlobalStyles } from '../GlobalStyles';
import { Contacts } from '../ContactsList/ContactsList';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { AppWraperStyled } from './App.styled';
export const App = () => {
  return (
    <AppWraperStyled>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <Contacts />
      <GlobalStyles />
    </AppWraperStyled>
  );
};
