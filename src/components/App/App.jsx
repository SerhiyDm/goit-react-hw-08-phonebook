import { GlobalStyles } from '../GlobalStyles';
import { Toaster } from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Contacts } from '../ContactsList/ContactsList';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { AppWraperStyled } from './App.styled';
import {
  selectError,
  selectIsLoading,
  selectContactsData,
} from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { Loader } from 'components/Loader/Loader.styled';
import { NotifyError } from 'components/Notify';
export const App = () => {
  const dispatch = useDispatch();
  const contactsData = useSelector(selectContactsData);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  useEffect(() => {
    if (error) NotifyError(error);
  }, [error]);
  return (
    <AppWraperStyled>
      <Toaster />
      <h1>Phonebook</h1>
      <ContactForm />
      {contactsData.length === 0 && <h3>Phonebook is empty</h3>}
      {contactsData.length !== 0 && (
        <>
          <h2>Contacts</h2>
          {isLoading && !error && <Loader />}
          <Filter />
          <Contacts />
        </>
      )}
      <GlobalStyles />
    </AppWraperStyled>
  );
};
