import { useSelector } from 'react-redux';
import { List } from './ContactsList.styled';
import { ContactsItem } from '../ContactsItem/ContactsItem';
import { selectRenderdata } from 'redux/selectors';
export const Contacts = () => {
  const renderData = useSelector(selectRenderdata);
  return renderData.length > 0 ? (
    <List>
      {renderData.map(({ name, phone, id }) => (
        <ContactsItem key={id} name={name} number={phone} id={id} />
      ))}
    </List>
  ) : (
    <h2>🤷‍♂️Сontacts containing such symbols are not available</h2>
  );
};
