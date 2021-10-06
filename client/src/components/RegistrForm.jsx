import React from 'react';

import { registration } from '../actions/user';

import Input from './Input';
import Header from './Header';
import Checkbox from './Checkbox';
import Footer from './Footer';

const RegistrForm = () => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [againPassword, setAgainPassword] = React.useState('');

  return (
    <div className="wrapper">
      <div className="form">
        <Header />
        <div className="input-main">
          <Input
            class="input"
            value={firstName}
            setValue={setFirstName}
            type="text"
            placeholder="Имя"
          />
          <Input
            class="input"
            value={lastName}
            setValue={setLastName}
            type="text"
            placeholder="Фамилия"
          />
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
          <Input
            class="input"
            value={againPassword}
            setValue={setAgainPassword}
            type="password"
            placeholder="Повторите пароль"
          />
        </div>
        <Checkbox
          id="checkbox-first"
          label="Я понимаю, что потеряв пароль, я могу потерять свои данные."
        />
        <Checkbox id="checkbox-second" label="Я все прочитал, и со всем соглашаюсь." />
        <button
          className="button"
          onClick={() => {
            registration(firstName, lastName, email, password);
          }}>
          Регистрация
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default RegistrForm;
