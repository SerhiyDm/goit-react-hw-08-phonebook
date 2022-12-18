import PropTypes from 'prop-types';
import { useState } from 'react';
import { Button } from 'components/ContactForm/Button/Button';
import { Input } from 'components/ContactForm/Input/Input';
import { FormStyled } from './ContactForm.styled';

export const ContactForm = ({ setContactData }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { value, name } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (setContactData(name, number)) {
      setName('');
      setNumber('');
    }
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <Input
        handleChange={handleChange}
        text="Name"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={name}
      />
      <Input
        handleChange={handleChange}
        text="Number"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        value={number}
      />
      <Button>Add Contact</Button>
    </FormStyled>
  );
};

ContactForm.propTypes = {
  setContactData: PropTypes.func.isRequired,
};
