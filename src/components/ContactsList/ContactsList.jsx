import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { List } from './ContactsList.styled';
import { ContactsItem } from '../ContactsItem/ContactsItem';
import { getContactsData } from 'redux/Contacts';
import { getFilterValue } from 'redux/Filter';

export const Contacts = () => {
  const contactsState = useSelector(getContactsData);
  const filterState = useSelector(getFilterValue);
  const [renderData, setRenderdata] = useState(contactsState);
  useEffect(() => {
    const data = contactsState.filter(({ name }) =>
      name.toLowerCase().includes(filterState.toLowerCase())
    );
    setRenderdata(data);
  }, [contactsState, filterState]);
  return (
    <List>
      {renderData.map(({ id, name, number }) => (
        <ContactsItem key={id} name={name} number={number} id={id} />
      ))}
    </List>
  );
};
