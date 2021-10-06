import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      Уже есть учетная запись? <NavLink to="/login">Войти</NavLink>
    </div>
  );
};

export default Footer;
