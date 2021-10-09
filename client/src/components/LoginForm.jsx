import React from 'react';
import { useDispatch } from 'react-redux';

import { login } from '../actions/user';

import Input from './Input';
import Footer from './Footer';

const LoginForm = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const dispatch = useDispatch();

  return (
    <div className="wrapper">
      <div className="form">
        <div className="header">
          <h2>Войти</h2>
        </div>
        <div className="input-secondary">
          <Input
            class="input"
            value={email}
            setValue={setEmail}
            type="email"
            placeholder="Адрес электронной почты"
          />
          <Input
            class="input"
            value={password}
            setValue={setPassword}
            type="password"
            placeholder="Пароль"
          />
        </div>
        <button
          className="button"
          onClick={() => {
            dispatch(login(email, password));
          }}>
          Войти
        </button>
      </div>
      <Footer isLogin={false} />
    </div>
  );
};

export default LoginForm;
