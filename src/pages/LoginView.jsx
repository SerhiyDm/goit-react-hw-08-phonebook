import { Form } from 'components/Form/Form';
import { NotifyOk } from 'components/Notify';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth';
const params1 = {
  text1: 'Email',
  type1: 'email',
  name1: 'loginEmail',
  pattern1:
    '^[\\w]{1,}[\\w.+-]{0,}@[\\w-]{2,}([.][a-zA-Z]{2,}|[.][\\w-]{2,}[.][a-zA-Z]{2,})$',
  title1: 'Invalid email address',
  text2: 'Password',
  type2: 'password',
  name2: 'loginPassword',
  pattern2: '[^ ].{2,12}$',
  title2:
    'The password must contain: At least 1 Uppercase At least 1 Lowercase At least 1 Number At least 1 Symbol, symbol allowed --> !@#$%^&*_=+- Min 8 chars and Max 12 chars',
  buttonText: 'login',
};

const LoginView = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      login({
        email: form.elements.loginEmail.value,
        password: form.elements.loginPassword.value,
      })
    ).unwrap()
    .then(() => {
      NotifyOk('✔');
    });
    form.reset();
  };
  return (
    <main>
      <Form params1={params1} onSubmit={handleSubmit} autoComplete="on" />
    </main>
  );
};

export default LoginView;
