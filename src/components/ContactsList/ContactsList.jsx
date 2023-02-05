import { List } from './ContactsList.styled';
import { ContactsItem } from '../ContactsItem/ContactsItem';
import { useContacts } from 'redux/hooks';
export const Contacts = () => {
  const { renderData } = useContacts();
  return renderData.length > 0 ? (
    <List>
      {renderData.map(({ name, number, id }) => (
        <ContactsItem key={id} name={name} number={number} id={id} />
      ))}
    </List>
  ) : (
    <h2>🤷‍♂️Сontacts containing such symbols are not available...</h2>
  );
};
