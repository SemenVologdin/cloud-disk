import React from 'react';

const NavBar = ({ exitBtn }) => {
  return (
    <div style={{ display: 'flex', float: 'right' }}>
      <button onClick={exitBtn}>Выйти</button>
    </div>
  );
};

export default NavBar;
