import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = ({ isLogin }) => {
  return isLogin ? (
    <div className="footer">
      Уже есть учетная запись? <NavLink to="/login">Войти</NavLink>
    </div>
  ) : (
    <div className="footer">
      Нет учетной записи? <NavLink to="/registration">Зарегистрироваться</NavLink>
    </div>
  );
};

export default Footer;
