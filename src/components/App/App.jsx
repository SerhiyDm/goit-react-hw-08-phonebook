import { useState, useEffect } from 'react';
import { GlobalStyles } from '../GlobalStyles';
import { nanoid } from 'nanoid';
import { Contacts } from '../ContactsList/ContactsList';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { AppWraperStyled } from './App.styled';
export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const setContactData = (nameValue, number) => {
    const name = nameValue
      .split(' ')
      .map(element => element[0].toUpperCase() + element.slice(1).toLowerCase())
      .join(' ');
    if (!contacts.find(contact => contact.name === name)) {
      setContacts(prevContacts => [
        ...prevContacts,
        { name, number, id: nanoid() },
      ]);

      return true;
    }
    alert(`${name} is already in contacts`);
  };
  const getFilterInputValue = e => setFilter(e.currentTarget.value);

  const getDataForRenderList = () =>
    contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );

  const onDelete = itemId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== itemId)
    );
  };
  return (
    <AppWraperStyled>
      <h1>Phonebook</h1>
      <ContactForm setContactData={setContactData} />
      <h2>Contacts</h2>
      <Filter
        handleChange={getFilterInputValue}
        text="Find contacts by name"
        value={filter}
      />
      {contacts.length !== 0 && (
        <Contacts options={getDataForRenderList()} handleClick={onDelete} />
      )}
      <GlobalStyles />
    </AppWraperStyled>
  );
};
