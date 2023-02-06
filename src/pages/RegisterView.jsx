import { useDispatch } from 'react-redux';
import { Form } from 'components/Form/Form';
import { register } from 'redux/auth';
import { NotifyOk } from 'components/Notify';

const params1 = {
  text1: 'Name',
  type1: 'text',
  name1: 'registerName',
  pattern1: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
  title1:
    "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
  text2: 'Email',
  type2: 'email',
  name2: 'registerEmail',
  pattern2:
    '^[\\w]{1,}[\\w.+-]{0,}@[\\w-]{2,}([.][a-zA-Z]{2,}|[.][\\w-]{2,}[.][a-zA-Z]{2,})$',
  title2: 'Invalid email address',
  buttonText: 'signup',
};

const params2 = {
  text: 'Password',
  type: 'password',
  name: 'registerPassword',
  pattern: '[^ ].{2,12}$',
  title:
    'The password must contain: At least 1 Uppercase At least 1 Lowercase At least 1 Number At least 1 Symbol, symbol allowed --> !@#$%^&*_=+- Min 8 chars and Max 12 chars',
};

export const RegisterView = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.registerName.value,
        email: form.elements.registerEmail.value,
        password: form.elements.registerPassword.value,
      })
    ).unwrap()
    .then(() => {
      NotifyOk('✔');
    });
    form.reset();
  };

  return (
    <main>
      <Form
        params1={params1}
        params2={params2}
        onSubmit={handleSubmit}
        autoComplete="off"
      />
    </main>
  );
};
export default RegisterView;
